import prisma from "@/app/lib/prisma";
import AddThemeForm from "@/app/addtheme/AddThemeForm";

export const dynamic = "force-dynamic";

export default async function EditThemePage({ params }) {
  const { id } = await params;

  // 1. Fetch Option Data (Same as Add Page)
  const designStyles = await prisma.lpDesignStyle.findMany();
  const ctaOptions = await prisma.cta.findMany();
  const lpForOptions = await prisma.lpFor.findMany();
  const contentTypeOptions = await prisma.lpContentType.findMany();
  const themeOptions = await prisma.theme.findMany();

  // 2. Fetch Existing Theme Data
  const existingTheme = await prisma.landingPage.findUnique({
    where: { id },
    include: {
      lpDesignStyle: true,
      lpFor: true,
      lpContentTypes: true,
      ctas: true,
      socialLinks: true,
    },
  });

  if (!existingTheme) {
    return <div>Theme not found</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Edit Theme
      </h1>
      
      <AddThemeForm
        designStyles={designStyles}
        ctaOptions={ctaOptions}
        lpForOptions={lpForOptions}
        contentTypeOptions={contentTypeOptions}
        themeOptions={themeOptions}
        initialData={existingTheme} // Pass existing data
      />
    </div>
  );
}
