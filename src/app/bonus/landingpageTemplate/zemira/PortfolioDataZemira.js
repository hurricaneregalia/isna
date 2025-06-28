"use client";
import { useState } from "react";
import Image from "next/image";
import { FiFilter, FiZoomIn } from "react-icons/fi";

const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Apartemen Menteng",
      type: "Apartemen",
      category: "living room",
      image: "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg",
      year: "2023",
    },
    {
      id: 2,
      title: "Rumah Mewah Pondok Indah",
      type: "Rumah Mewah",
      category: "bedroom",
      image: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
      year: "2022",
    },
    {
      id: 3,
      title: "Kantor Direksi SCBD",
      type: "Kantor",
      category: "living room",
      image: "https://images.pexels.com/photos/7031425/pexels-photo-7031425.jpeg",
      year: "2023",
    },
    {
      id: 4,
      title: "Apartemen Kuningan City",
      type: "Apartemen",
      category: "kitchen",
      image: "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg",
      year: "2023",
    },
    {
      id: 5,
      title: "Rumah Mewah BSD City",
      type: "Rumah Mewah",
      category: "bedroom",
      image: "https://images.pexels.com/photos/7031417/pexels-photo-7031417.jpeg",
      year: "2021",
    },
    {
      id: 6,
      title: "Kantor Startup Jakarta",
      type: "Kantor",
      category: "living room",
      image: "https://images.pexels.com/photos/7031430/pexels-photo-7031430.jpeg",
      year: "2022",
    },
  ],
  filters: [
    { id: "all", label: "Semua Proyek" },
    { id: "Apartemen", label: "Apartemen" },
    { id: "Rumah Mewah", label: "Rumah Mewah" },
    { id: "Kantor", label: "Kantor" },
  ],
  categories: [
    { id: "living room", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "kitchen", label: "Kitchen" },
  ],
};

export function PortfolioDataZemira() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    const typeMatch = activeFilter === "all" || project.type === activeFilter;
    const categoryMatch = activeCategory === "all" || project.category === activeCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Portofolio <span className="text-primary">Eksklusif</span>
          </h2>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">Lihat transformasi ruangan yang kami kerjakan untuk klien profesional</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <FiFilter className="text-lg" />
            <span className="font-medium">Filter:</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {portfolioData.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`btn btn-sm ${activeFilter === filter.id ? "btn-primary" : "btn-ghost"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <select onChange={(e) => setActiveCategory(e.target.value)} className="select select-bordered select-sm">
              <option value="all">Semua Kategori</option>
              {portfolioData.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <figure className="relative h-64">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <FiZoomIn className="text-white text-3xl" />
                </div>
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-lg">{project.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="badge badge-outline">{project.type}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg">Tidak ada proyek yang sesuai dengan filter ini</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setActiveCategory("all");
              }}
              className="btn btn-link mt-4"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="relative bg-base-100 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 btn btn-circle btn-sm btn-ghost">
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div className="relative h-64 md:h-full">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover rounded-lg" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="badge badge-primary">{selectedProject.type}</span>
                    <span className="badge badge-outline">{selectedProject.category}</span>
                  </div>
                  <p className="mb-4">Tahun: {selectedProject.year}</p>
                  <p className="italic">"Desain interior premium dengan material terbaik yang disesuaikan kebutuhan klien"</p>
                  <button className="btn btn-primary mt-6">Konsultasi Proyek Serupa</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
