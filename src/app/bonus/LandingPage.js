// src/app/component/landingPage/LandingPage.js
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

// Fungsi bantu untuk membaca file JSON secara sinkron
function getLandingPages() {
  const filePath = path.join(process.cwd(), "src/app/api/datajs/landingpage/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}

export default async function LandingPage() {
  const landingPages = getLandingPages().filter((page) => page.isActive);

  if (!landingPages || landingPages.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl">Tidak ada data landing page aktif.</p>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Landing Pages</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingPages.map((page) => (
          <div key={page.id} className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
            <figure>
              <Image src={page.image} alt={page.name} width={300} height={300} className="w-full h-48 object-cover rounded-t-md" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">{page.name}</h2>
              <p>Desain</p>
              <div className="badge badge-info badge-outline mt-2">{page.lpDesignStyle.name}</div>

              <div className="mt-4">
                <h3 className="font-semibold">Cocok untuk:</h3>
                <ul className="list-disc list-inside text-sm opacity-75 ">
                  {page.lpFor.map((item) => (
                    <li key={item.id}>{item.description || "(tidak ada deskripsi)"}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-2">
                <h3 className="font-semibold">Mendukung konten:</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {page.lpContentTypes.map((content) => (
                    <span key={content.id} className="badge badge-secondary">
                      {content.type}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Link href={`/bonus/${page.slug}`} className="btn btn-md rounded-full btn-primary w-full">
                  Lihat Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
