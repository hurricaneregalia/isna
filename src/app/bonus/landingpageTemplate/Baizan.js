import React from "react";
import { FiCheckCircle, FiShoppingBag, FiTruck, FiHeart, FiStar, FiChevronDown } from "react-icons/fi";
import { FaTshirt, FaRegSmile, FaRegLaughSquint } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// Data structure for maintainability
const data = {
  hero: {
    title: "Tampil Percaya Diri dengan Gaya Kasual yang Sempurna",
    subtitle: "Koleksi terbaru untuk pria & wanita dengan bahan premium dan desain timeless",
    cta: "Lihat Koleksi",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  benefits: [
    {
      icon: <FaRegSmile className="w-8 h-8" />,
      title: "Percaya Diri",
      description: "Tampil maksimal di berbagai kesempatan dengan gaya kasual yang tepat",
    },
    {
      icon: <FaTshirt className="w-8 h-8" />,
      title: "Nyaman Sepanjang Hari",
      description: "Bahan breathable yang membuat Anda nyaman dari pagi hingga malam",
    },
    {
      icon: <FaRegLaughSquint className="w-8 h-8" />,
      title: "Fleksibel",
      description: "Cocok untuk kerja, kumpul dengan teman, atau acara santai lainnya",
    },
  ],
  about: {
    title: "Gaya Hidup Nyaman dengan Koleksi Kami",
    description:
      "Kami percaya pakaian kasual bukan sekadar gaya, tapi cara hidup. Setiap potongan dirancang untuk menemani aktivitas sehari-hari dengan nyaman tanpa mengorbankan gaya.",
    usps: [
      "Bahan premium impor yang lembut dan tahan lama",
      "Potongan sesuai bentuk tubuh untuk penampilan optimal",
      "Desain timeless yang tidak lekang waktu",
      "Pilihan warna yang mudah dipadupadankan",
    ],
    images: [
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
  },
  products: [
    {
      name: "Kaos Basic Premium",
      price: "Rp 149.000",
      category: "Pria",
      imageUrl: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Blouse Casual Wanita",
      price: "Rp 199.000",
      category: "Wanita",
      imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Celana Chino Slim Fit",
      price: "Rp 249.000",
      category: "Pria",
      imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Rok Kasual Wanita",
      price: "Rp 179.000",
      category: "Wanita",
      imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ],
  testimonials: [
    {
      name: "Andi Pratama",
      city: "Jakarta",
      review: "Bahan kaosnya sangat nyaman dipakai seharian. Sudah beli 3 warna berbeda!",
      rating: 5,
      imageUrl: "/images/uploads/products/qolilan-copy/main.jpg",
    },
    {
      name: "Siti Rahayu",
      city: "Bandung",
      review: "Potongan blousenya sangat flattering. Pelayanannya juga cepat dan ramah.",
      rating: 5,
      imageUrl: "/images/uploads/products/qolilan-copy/main.jpg",
    },
    {
      name: "Budi Santoso",
      city: "Surabaya",
      review: "Celana chino-nya pas banget di badan. Kualitas jahitan premium seperti harga retail brand ternama.",
      rating: 4,
      imageUrl: "/images/uploads/products/qolilan-copy/main.jpg",
    },
  ],
  orderSteps: [
    {
      icon: <FiShoppingBag className="w-8 h-8" />,
      title: "Pilih Produk",
      description: "Pilih baju favorit Anda dari koleksi kami",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Konfirmasi Ukuran",
      description: "Konsultasikan ukuran dengan tim kami via WhatsApp",
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Pengiriman Cepat",
      description: "Pesanan dikirim maksimal 1 hari setelah pembayaran",
    },
  ],
  faqs: [
    {
      question: "Bagaimana cara mengetahui ukuran yang cocok?",
      answer:
        "Kami menyediakan panduan ukuran detail untuk setiap produk. Anda juga bisa berkonsultasi dengan tim kami via WhatsApp untuk rekomendasi ukuran.",
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Pengiriman dalam kota 1-2 hari kerja, luar kota 2-5 hari kerja tergantung lokasi.",
    },
    {
      question: "Apakah bisa retur produk?",
      answer: "Kami menerima retur dalam kondisi belum dipakai/dicuci dengan tag masih terpasang, maksimal 3 hari setelah barang diterima.",
    },
    {
      question: "Bahan produk apakah mudah kusut?",
      answer: "Kami menggunakan bahan premium dengan treatment khusus sehingga minim kusut dan mudah diatur.",
    },
  ],
  finalCta: {
    title: "Mulai Gaya Kasual Anda Hari Ini",
    subtitle: "Dapatkan penawaran khusus untuk pembelian pertama Anda",
    cta: "Pesan Sekarang",
  },
};

const CasualWearLanding = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* ATTENTION: Hero Section */}
      <section className="relative h-screen flex items-end justify-center pb-20">
        <div className="absolute inset-0 bg-black/50 z-0">
          <Image src={data.hero.imageUrl} alt="Model casual wear" layout="fill" objectFit="cover" quality={100} priority />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{data.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white mb-8">{data.hero.subtitle}</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition duration-300 transform hover:scale-105">
            {data.hero.cta} <BsArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* INTEREST: Benefits Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mengapa Memilih Pakaian Kasual Berkualitas?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-amber-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIRE: About Product */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.about.title}</h2>
              <p className="text-lg mb-6">{data.about.description}</p>
              <ul className="space-y-3 mb-8">
                {data.about.usps.map((usp, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{usp}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {data.about.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  <Image src={image} alt={`Casual wear ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIRE: Product Gallery */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Koleksi Kami</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Pilihan pakaian kasual berkualitas untuk gaya sehari-hari yang sempurna</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.products.map((product, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium">{product.category}</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-amber-600 font-semibold">{product.price}</p>
                <button className="mt-3 w-full bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-800 py-2 rounded-full text-sm font-medium transition duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIRE: Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Apa Kata Pelanggan Kami?</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Ribuan pelanggan telah merasakan kenyamanan produk kami</p>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-gray-800 p-6 rounded-xl ${index === 1 ? "border-2 border-amber-500" : ""}`}>
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.imageUrl} alt={testimonial.name} layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.city}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={`${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"} w-5 h-5`} />
                  ))}
                </div>
                <p className="text-gray-300">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION: Order Steps */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Cara Memesan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Proses pemesanan yang mudah dan cepat hanya dalam 3 langkah</p>

        <div className="grid md:grid-cols-3 gap-8">
          {data.orderSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-amber-600">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION: FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pertanyaan yang Sering Diajukan</h2>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition duration-200">
                  <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                  <FiChevronDown className="text-gray-500" />
                </button>
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION: Final CTA */}
      <section className="relative py-32 px-4 text-center">
        <div className="absolute inset-0 bg-black/50 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Happy customers"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.finalCta.title}</h2>
          <p className="text-xl text-white mb-8">{data.finalCta.subtitle}</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            {data.finalCta.cta} <BsArrowRight className="inline ml-2" />
          </button>
          <p className="mt-6 text-gray-300 text-sm">Garansi kepuasan 30 hari • Gratis konsultasi gaya • Pengiriman ke seluruh Indonesia</p>
        </div>
      </section>
    </div>
  );
};

export default CasualWearLanding;
