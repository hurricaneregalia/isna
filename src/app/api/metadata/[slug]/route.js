export async function GET(request, { params }) {
  const { slug } = params;
  try {
    const metadata = await prisma.metaData.findUnique({
      where: { slug },
    });

    if (!metadata) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(JSON.stringify(metadata, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
