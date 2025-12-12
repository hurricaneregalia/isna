
import prisma from "@/app/lib/prisma";
import AddThemeForm from "./AddThemeForm";

export const dynamic = 'force-dynamic';

export default async function AddThemePage() {
  // Fetch options from database
  // Using try-catch to handle cases where tables might be empty or missing during dev
  let designStyles = [];
  let ctaOptions = [];
  let lpForOptions = [];
  let contentTypeOptions = [];
  let themeOptions = [];

  try {
    designStyles = await prisma.lpDesignStyle.findMany({ select: { id: true, name: true } });
  } catch (e) {
    console.error("Error fetching LpDesignStyle:", e);
  }

  try {
    ctaOptions = await prisma.cta.findMany({ select: { id: true, description: true } });
  } catch (e) {
    console.error("Error fetching Cta:", e);
  }

  try {
    lpForOptions = await prisma.lpFor.findMany({ select: { id: true, description: true } });
  } catch (e) {
    console.error("Error fetching LpFor:", e);
  }

  try {
    contentTypeOptions = await prisma.lpContentType.findMany({ select: { id: true, type: true } });
  } catch (e) {
    console.error("Error fetching LpContentType:", e);
  }

  try {
    themeOptions = await prisma.theme.findMany({ select: { id: true, name: true } });
  } catch (e) {
    console.error("Error fetching Theme:", e);
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Theme / Landing Page</h1>
      <AddThemeForm 
        designStyles={designStyles}
        ctaOptions={ctaOptions}
        lpForOptions={lpForOptions}
        contentTypeOptions={contentTypeOptions}
        themeOptions={themeOptions}
      />
    </div>
  );
}
