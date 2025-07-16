"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const testimonials = {
  title: "Testimoni",
  items: [
    {
      id: 1,
      name: "Sarah Johnson",
      profession: "Owner, Cafe Lumière",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Pelayanan mereka luar biasa! Proyek selesai tepat waktu dan hasilnya menakjubkan.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 2,
      name: "Dimas Setiawan",
      profession: "CEO, Ruang Interior",
      photo: "https://randomuser.me/api/portraits/men/36.jpg",
      quote: "Tim sangat profesional dan kreatif. Portofolio mereka berbicara banyak.",
      rating: 4,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 3,
      name: "Amira Putri",
      profession: "Marketing Manager, UrbanStay",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Kami mendapatkan lebih dari yang kami harapkan. Layout dan visualisasinya sangat kuat.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 4,
      name: "Yusuf Al-Fatih",
      profession: "Founder, DesainPro",
      photo: "https://randomuser.me/api/portraits/men/21.jpg",
      quote: "Detail dan kualitas sangat diperhatikan. Pekerjaan yang luar biasa.",
      rating: 4,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 5,
      name: "Lia Paramita",
      profession: "Creative Director, Artline",
      photo: "https://randomuser.me/api/portraits/women/25.jpg",
      quote: "Visual brand kami meningkat drastis setelah bekerja sama.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 6,
      name: "Andrew Hartono",
      profession: "Managing Director, Kontainer",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "Responsif dan mengerti kebutuhan bisnis kami dengan sangat baik.",
      rating: 4,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 7,
      name: "Nadia Rizki",
      profession: "Pemilik, Homely Stay",
      photo: "https://randomuser.me/api/portraits/women/18.jpg",
      quote: "Sangat puas dengan hasil akhirnya! Stylish dan fungsional.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 8,
      name: "Teguh Mahendra",
      profession: "UI/UX Designer",
      photo: "https://randomuser.me/api/portraits/men/42.jpg",
      quote: "Mereka benar-benar mengerti estetika dan usability.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 9,
      name: "Siska Marlina",
      profession: "Owner, Warung Modern",
      photo: "https://randomuser.me/api/portraits/women/81.jpg",
      quote: "Tim sangat kooperatif dari awal hingga akhir proyek.",
      rating: 4,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
    {
      id: 10,
      name: "Farhan Aziz",
      profession: "Architect, Form & Function",
      photo: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "Konsep desainnya benar-benar kuat dan visioner.",
      rating: 5,
      images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
    },
  ],
};

export default function TestimonialSectionTextMirka() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-base-100 px-3 sm:px-5" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{testimonials.title}</h2>

      {/* Carousel Scrollable: Chat Bubble */}
      <div className="w-full overflow-x-auto">
        <div className="carousel carousel-center space-x-4 w-max pb-10">
          {testimonials.items.map((item) => (
            <div key={item.id} className="group carousel-item relative w-64 shrink-0 transition-all">
              <div className="bg-base-200 p-6 pb-4 text-center flex flex-col relative">
                <div className="mb-4">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 mx-auto border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                    onClick={() => setSelectedImage(item.images)}
                  />
                </div>
                <div className="text-center flex justify-center text-2xl opacity-20 gap-2 mb-3">
                  <FaQuoteLeft />
                  <FaQuoteRight />
                </div>
                <p className="italic text-sm text-gray-700">{item.quote}</p>
                <h3 className="font-semibold mt-4">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.profession}</p>
                <div className="mt-3 text-yellow-500 text-lg">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
                <div className="absolute left-0 w-0 h-0 border-t-[20px] border-t-base-200 border-r-[20px] border-r-transparent" style={{ bottom: "-20px" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
