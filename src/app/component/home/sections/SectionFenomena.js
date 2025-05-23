// src/app/components/SectionFenomena.jsx
import { prisma } from "@/app/lib/prisma";

export default async function SectionFenomena() {
  const section = await prisma.section.findUnique({
    where: {
      id: "3", // Ganti ini dengan ID section yang benar (cuid)
    },
    include: {
      listItems: {
        include: {
          entries: true,
        },
      },
    },
  });

  if (!section) {
    return <div className="text-center py-12 text-red-500">Section dengan ID tersebut tidak ditemukan.</div>;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{section.title}</h2>

        {section.subTitle && <h4 className="text-xl text-center text-gray-600">{section.subTitle}</h4>}

        {section.description && <p className="mt-4 text-center text-gray-700">{section.description}</p>}

        {section.listItems.length > 0 && (
          <ul className="mt-6 space-y-6">
            {section.listItems.map((item) => (
              <li key={item.id} className="bg-white p-4 rounded shadow">
                <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
                {item.description && <p className="text-sm text-gray-600">{item.description}</p>}

                {item.entries.length > 0 && (
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-700">
                    {item.entries.map((entry) => (
                      <li key={entry.id}>
                        <strong>{entry.title}</strong>
                        {entry.price && <span> - Rp{entry.price}</span>}
                        {entry.description && <p className="text-gray-500">{entry.description}</p>}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
