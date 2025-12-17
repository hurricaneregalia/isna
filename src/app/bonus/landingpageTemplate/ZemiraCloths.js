// src/app/landingpage/tas-wanita.jsx

import Image from "next/image";
import {
  FiShoppingBag,
  FiCheckCircle,
  FiStar,
  FiAward,
  FiShoppingCart,
  FiMessageSquare,
  FiClock,
  FiShield,
  FiGift,
  FiHelpCircle,
  FiMail,
  FiPhone,
  FiCreditCard,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const landingData = {
  hero: {
    title: "Tas Mewah yang Menjadi Pusat Perhatian di Setiap Ruangan",
    subtitle: "Ekspresikan kelas dan gaya profesional Anda dengan aksesori sempurna",
    cta: "Lihat Koleksi Eksklusif",
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    imageAlt: "Wanita karir elegan membawa tas kulit mewah",
  },
  benefits: [
    {
      title: "Material Kulit Impor Berkualitas Tinggi",
      description: "Dibuat dari kulit sapi pilihan dengan tekstur sempurna dan tahan lama",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
    {
      title: "Desain Ergonomis untuk Kenyamanan Seharian",
      description: "Tali yang dapat disesuaikan mengurangi tekanan pada bahu",
      icon: <FiStar className="w-6 h-6" />,
    },
    {
      title: "Kompartemen Cerdas untuk Perlengkapan Profesional",
      description: "Sistem organisasi interior yang dirancang khusus untuk wanita karir",
      icon: <FiAward className="w-6 h-6" />,
    },
  ],
  socialProof: {
    testimonial: {
      text: "Sejak menggunakan tas ini, saya merasa lebih percaya diri dalam meeting dengan klien. Banyak kolega yang bertanya dimana membelinya!",
      author: "Diana Putri",
      role: "Director of Marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    badges: ["Bestseller 2024", "Editor's Choice"],
    featuredIn: [
      { name: "Vogue", logo: "/logos/vogue.svg" },
      { name: "Forbes", logo: "/logos/forbes.svg" },
    ],
  },
};
const productData = {
  variants: [
    {
      name: "Classic Black",
      color: "bg-neutral-900",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1386&q=80",
    },
    {
      name: "Taupe Elegance",
      color: "bg-[#B7A99A]",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      name: "Burgundy Premium",
      color: "bg-[#6C2D2C]",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  details: {
    materials: ["Kulit sapi Italia full-grain", "Lapisan dalam sutra impor", "Hardware berbahan kuningan berlapis emas 24k"],
    craftsmanship: ["Dijahit tangan oleh pengrajin berpengalaman 15+ tahun", "Proses penyamakan kulit 8 minggu", "Garansi jahitan seumur hidup"],
    price: 3499000,
    discountPrice: 2799000,
    discountEnd: "2024-12-31",
    videoUrl: "https://www.youtube.com/embed/example-unboxing",
  },
  usp: {
    comparison: [
      {
        feature: "Material",
        ourProduct: "Kulit impor grade A",
        regular: "Kulit sintetis/kulit lokal",
      },
      {
        feature: "Daya tahan",
        ourProduct: "10+ tahun dengan perawatan tepat",
        regular: "2-3 tahun",
      },
      {
        feature: "Nilai jual kembali",
        ourProduct: "Hingga 70% setelah 5 tahun",
        regular: "Tidak ada nilai jual kembali",
      },
    ],
    bonus: "Gratis Dust Bag Eksklusif untuk 50 Pembeli Pertama",
    warranty: "Garansi kepuasan 30 hari",
  },
  cta: {
    headline: "Miliki Simbol Status Profesional Anda Hari Ini",
    subheadline: "Stok Terbatas - Pesan Sekarang Sebelum Kehabisan",
    buttons: [
      {
        text: "Beli Sekarang",
        icon: <FiShoppingCart className="w-5 h-5" />,
        style: "btn-primary",
      },
      {
        text: "Chat Konsultasi",
        icon: <FiMessageSquare className="w-5 h-5" />,
        style: "btn-outline",
      },
    ],
  },
};
const faqData = [
  {
    question: "Apa saja material yang digunakan untuk tas ini?",
    answer:
      "Tas kami menggunakan kulit sapi Italia full-grain berkualitas tinggi, lapisan dalam dari sutra impor, dan hardware berbahan kuningan berlapis emas 24k.",
  },
  {
    question: "Bagaimana cara merawat tas kulit premium?",
    answer:
      "Gunakan lap microfiber untuk membersihkan debu, hindarkan dari air dan sinar matahari langsung, dan simpan dalam dust bag ketika tidak digunakan. Kami menyertakan panduan perawatan lengkap dengan setiap pembelian.",
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Pengiriman dalam kota 1-2 hari kerja, luar kota 2-5 hari kerja. Untuk pengiriman internasional membutuhkan 7-14 hari kerja tergantung destinasi.",
  },
  {
    question: "Apakah tersedia opsi pembayaran cicilan?",
    answer: "Ya, kami bekerjasama dengan beberapa bank untuk pembayaran cicilan 0% hingga 12 bulan. Pilihan lengkap akan muncul saat checkout.",
  },
  {
    question: "Bagaimana jika produk tidak sesuai ekspektasi?",
    answer:
      "Kami menawarkan garansi kepuasan 30 hari. Jika tidak puas, Anda dapat mengembalikan produk dalam kondisi baru dan mendapatkan pengembalian dana penuh.",
  },
];

const footerData = {
  contact: {
    email: "cs@premiumbag.id",
    phone: "0812-3456-7890",
    hours: "Senin-Minggu, 09.00-17.00 WIB",
  },
  links: [
    { text: "Kebijakan Pengembalian", url: "/return-policy" },
    { text: "Syarat & Ketentuan", url: "/terms" },
    { text: "Panduan Ukuran", url: "/size-guide" },
    { text: "Tentang Kami", url: "/about" },
  ],
  socialMedia: [
    { icon: <FiInstagram className="w-5 h-5" />, url: "https://instagram.com/premiumbag" },
    { icon: <FiFacebook className="w-5 h-5" />, url: "https://facebook.com/premiumbag" },
    { icon: <FiTwitter className="w-5 h-5" />, url: "https://twitter.com/premiumbag" },
  ],
};
export default function TasWanitaLanding() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-linear-to-r from-base-100 to-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="relative w-full lg:w-1/2 h-96 lg:h-[500px]">
            <Image
              src={landingData.hero.imageUrl}
              alt={landingData.hero.imageAlt}
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{landingData.hero.title}</h1>
            <p className="py-6 text-lg opacity-80">{landingData.hero.subtitle}</p>
            <button className="btn btn-primary gap-2">
              <FiShoppingBag />
              {landingData.hero.cta}
            </button>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="avatar">
                    <div className="w-10 h-10 rounded-full ring-2 ring-base-100">
                      <Image src={`https://randomuser.me/api/portraits/women/${item + 20}.jpg`} width={40} height={40} alt="Happy customer" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p>Dibeli oleh 1000+ wanita profesional</p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Tas Kami?</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Setiap detail dirancang untuk mendukung gaya hidup profesional modern</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landingData.benefits.map((benefit, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">{benefit.icon}</div>
                  <h3 className="card-title text-xl">{benefit.title}</h3>
                  <p className="opacity-80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl h-64 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Tas wanita dari berbagai angle"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-full ring-2 ring-primary ring-offset-base-200 ring-offset-2">
                        <Image
                          src={landingData.socialProof.testimonial.imageUrl}
                          width={64}
                          height={64}
                          alt={landingData.socialProof.testimonial.author}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{landingData.socialProof.testimonial.author}</h4>
                      <p className="text-sm opacity-70">{landingData.socialProof.testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-lg italic">"{landingData.socialProof.testimonial.text}"</p>
                  <div className="flex gap-2 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Dipercaya oleh Wanita Profesional</h3>
                  <div className="flex flex-wrap gap-4">
                    {landingData.socialProof.badges.map((badge, index) => (
                      <div key={index} className="badge badge-primary badge-lg gap-2">
                        <FiAward className="w-4 h-4" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Tampil di</h3>
                  <div className="flex flex-wrap gap-8 items-center">
                    {landingData.socialProof.featuredIn.map((media, index) => (
                      <div key={index} className="h-12 w-24 relative opacity-80 hover:opacity-100 transition-opacity">
                        {/* Logo media placeholder - replace with actual Image components */}
                        <div className="flex items-center justify-center h-full w-full bg-base-300 rounded-lg">{media.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Pilihan Warna Eksklusif</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {productData.variants.map((variant, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
                <figure className="relative h-64">
                  <Image
                    src={variant.image}
                    alt={`Tas wanita warna ${variant.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{variant.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${variant.color}`}></div>
                    <span className="text-sm opacity-70">Warna {variant.name.split(" ")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="aspect-w-16 aspect-h-9 bg-base-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-96"
                  src={productData.videoUrl}
                  title="Unboxing tas wanita premium"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Detail Kualitas Premium</h3>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Material:</h4>
                <ul className="space-y-2">
                  {productData.details.materials.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Craftsmanship:</h4>
                <ul className="space-y-2">
                  {productData.details.craftsmanship.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex flex-wrap items-end gap-4 mb-4">
                  <div>
                    <span className="text-sm opacity-70 line-through">Rp {productData.details.price.toLocaleString("id-ID")}</span>
                    <p className="text-3xl font-bold text-primary">Rp {productData.details.discountPrice.toLocaleString("id-ID")}</p>
                  </div>
                  <div className="badge badge-primary badge-lg gap-1">
                    <FiClock className="w-4 h-4" />
                    Diskon hingga {new Date(productData.details.discountEnd).toLocaleDateString("id-ID", { day: "numeric", month: "long" })}
                  </div>
                </div>
                <p className="text-sm opacity-80">Gratis ongkir & paket pengiriman premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Investasi Fashion yang Cerdas</h2>

          <div className="overflow-x-auto mb-16">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th>Tas Kami</th>
                  <th>Tas Biasa</th>
                </tr>
              </thead>
              <tbody>
                {productData.usp.comparison.map((item, index) => (
                  <tr key={index}>
                    <td>{item.feature}</td>
                    <td>
                      <div className="flex items-center gap-2 text-primary">
                        <FiCheckCircle className="w-5 h-5" />
                        {item.ourProduct}
                      </div>
                    </td>
                    <td className="opacity-70">{item.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <div className="card bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <FiGift className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Bonus Spesial</h3>
                  </div>
                  <p className="text-lg">{productData.usp.bonus}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <FiShield className="w-5 h-5" />
                    <span>{productData.usp.warranty}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4">Mengapa Ini Investasi yang Baik?</h3>
                <p>
                  Tas premium bukan sekadar aksesori, melainkan simbol status profesional yang meningkatkan kepercayaan diri dan persepsi orang lain
                  terhadap Anda. Dengan perawatan yang tepat, tas ini akan menjadi teman setia Anda selama bertahun-tahun.
                </p>
                <ul>
                  <li>Meningkatkan profesionalisme di lingkungan kerja</li>
                  <li>Mempertahankan nilai hingga 70% setelah 5 tahun</li>
                  <li>Mengurangi pengeluaran untuk tas berkualitas rendah setiap tahun</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral text-neutral-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{productData.cta.headline}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">{productData.cta.subheadline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {productData.cta.buttons.map((button, index) => (
              <button key={index} className={`btn ${button.style} gap-2`}>
                {button.icon}
                {button.text}
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm">
            <FiShield className="w-5 h-5" />
            <span>{productData.usp.warranty} - Pengembalian uang tanpa pertanyaan</span>
          </div>
        </div>
      </section>
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Pertanyaan yang Sering Diajukan</h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200">
                <input type="radio" name="faq-accordion" id={`faq-${index}`} />
                <div className="collapse-title text-lg font-medium flex items-center">
                  <FiHelpCircle className="w-5 h-5 mr-3 text-primary" />
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p className="pt-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="footer-title">Kontak Kami</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5" />
                  <span>{footerData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5" />
                  <span>{footerData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiClock className="w-5 h-5" />
                  <span>{footerData.contact.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="footer-title">Informasi</h3>
              <div className="grid grid-cols-2 gap-4">
                {footerData.links.map((link, index) => (
                  <a key={index} href={link.url} className="link link-hover">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="footer-title">Ikuti Kami</h3>
              <div className="flex gap-4">
                {footerData.socialMedia.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline btn-sm">
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Metode Pembayaran</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-base-100 p-2 rounded-lg">
                    <FiCreditCard className="w-6 h-6" />
                  </div>
                  <div className="bg-base-100 p-2 rounded-lg">
                    <Image src="/payment/bca.png" width={24} height={24} alt="BCA" />
                  </div>
                  <div className="bg-base-100 p-2 rounded-lg">
                    <Image src="/payment/mandiri.png" width={24} height={24} alt="Mandiri" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-600 mt-10 pt-6 text-center">
            <p>© {new Date().getFullYear()} PremiumBag. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
