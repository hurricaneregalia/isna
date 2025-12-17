"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveTheme(data) {
  try {
    // Parse JSON keywords if it's a string, or ensure it's a string for storage if expected
    // Schema says `keywords String? // simpan array sebagai JSON string`
    // form sends it as a string already if we used JSON.stringify in the client,
    // BUT the form logic I wrote did: `keywords: JSON.stringify(...)`
    // Let's double check what the client sends.

    // Construct the create payload
    const result = await prisma.landingPage.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        keywords: data.keywords, // Already stringified in client
        ogImage: data.ogImage || null,
        image: data.image,
        component: data.component || null,
        marketingTools: data.marketingTools || null,
        isActive: data.isActive,

        // Relations
        theme: data.themeId
          ? {
              connect: { id: data.themeId },
            }
          : undefined,

        lpDesignStyle: data.lpDesignStyleId
          ? {
              connect: { id: data.lpDesignStyleId },
            }
          : undefined,

        // Many-to-Many Connections
        lpFor: {
          connect: data.lpFor.map((id) => ({ id })),
        },
        lpContentTypes: {
          connect: data.lpContentTypes.map((id) => ({ id })),
        },
        ctas: {
          connect: data.ctas.map((id) => ({ id })),
        },

        // One-to-Many Creation (SocialLinks are owned by LandingPage)
        socialLinks: {
          create: data.socialLinks
            .filter((link) => link.url) // Only add if URL exists
            .map((link) => ({
              platform: link.platform,
              url: link.url,
              platformUsername: link.platformUsername,
            })),
        },
      },
    });

    revalidatePath("/addtheme");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating theme:", error);
    return { success: false, error: error.message };
  }
}

export async function updateTheme(id, data) {
  try {
    const { socialLinks, lpFor, lpContentTypes, ctas, lpDesignStyleId, themeId, ...mainData } = data;

    // 1. Update basic info and simple relations
    await prisma.landingPage.update({
      where: { id },
      data: {
        ...mainData,
        lpDesignStyleId: lpDesignStyleId ? lpDesignStyleId : null,
        themeId: themeId ? parseInt(themeId) : null,

        // 2. Handle Many-to-Many Relations (Disconnect all, then Connect new)
        lpFor: {
          set: lpFor.map((id) => ({ id })),
        },
        lpContentTypes: {
          set: lpContentTypes.map((id) => ({ id })),
        },
        ctas: {
          set: ctas.map((id) => ({ id })),
        },
      },
    });

    // 3. Handle One-to-Many (Social Links) - Delete all and recreate
    // Optimally, we could update existing ones, but recreation is simpler for now
    await prisma.socialLink.deleteMany({
      where: { landingPageId: id },
    });

    if (socialLinks && socialLinks.length > 0) {
      const validLinks = socialLinks.filter((l) => l.url || l.platformUsername);
      if (validLinks.length > 0) {
        await prisma.socialLink.createMany({
          data: validLinks.map((link) => ({
            ...link,
            landingPageId: id,
          })),
        });
      }
    }

    revalidatePath("/listtheme");
    return { success: true };
  } catch (error) {
    console.error("Error updating theme:", error);
    return { success: false, error: error.message };
  }
}
