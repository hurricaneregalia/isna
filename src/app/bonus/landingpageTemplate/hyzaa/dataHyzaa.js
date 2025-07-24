import { BsExclamationCircle, BsCurrencyDollar } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdSpeed, MdBuild, MdSecurity, MdLocalShipping, MdSettings, MdFlightTakeoff, MdAttachMoney, MdThumbUp } from "react-icons/md";
import { ShieldCheckIcon, BoltIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function dataHyzaa() {
  return [
    (dataHyzaa = {
      heroData: {
        headline: "Aman & Nyaman, Bahkan di Pegunungan yang Paling Ekstrem",
        subheadline: "Sepeda gunung yang dirancang untuk menaklukkan jalur terjal tanpa hambatan.",
        imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pexels-photo-1659437.webp",
      },
      painData: {
        label: "Masalah Umum Rider",
        headline: "Ketika sepeda menjadi beban dalam petualangan",
        pegunungan: {
          title: "Moab, Utah – Amerika",
          description: "Jalur pegunungan yang sulit dilalui, medan terjal, bebatuan tajam dengan tanjakan curam, menantang semua rider sepeda gunung dengan resiko yang besar.",
          imageUrl: "https://images.pexels.com/photos/28144483/pexels-photo-28144483.jpeg",
        },
        rider: {
          title: "Rider Lelah",
          imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pain-1.png",
        },
        pains: [
          {
            icon: <BsExclamationCircle />,
            title: "Suspensi Cepat Rusak",
            description: "Bebatuan terasa langsung ke tubuh. Suspensi tak lagi meredam setelah beberapa minggu.",
          },
          {
            icon: <GiWeight />,
            title: "Berat di Tanjakan",
            description: "Rangka padat jadi beban. Tanjakan terasa dua kali lebih berat dari seharusnya.",
          },
          {
            icon: <BsCurrencyDollar />,
            title: "Harga Tak Sepadan",
            description: "Fitur terbatas, cepat aus, dan tak mencerminkan harga premium yang dibayar.",
          },
        ],
      },
      idealData: {
        label: "INILAH YANG SEHARUSNYA",
        headline: "Exling Sport membantu kamu menaklukan jalur ekstrem",
        description: "Partner andalan yang siap menaklukan semua medan pegunungan. Stabil, ringan, dan siap hadapi medan yang paling liar.",
        imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/photo-1606087492572-424ebe0f2f61.jpg",
        item: [
          {
            icon: <MdSettings className="text-primary" />,
            title: "Suspensi Tangguh Anti-Rusak",
            description: "Meredam hentakan ekstrem tanpa kehilangan kenyamanan di medan berat.",
          },
          {
            icon: <MdFlightTakeoff className="text-primary" />,
            title: "Ringan & Stabil",
            description: "Material aerospace membuatnya ringan di tanjakan, dan tetap stabil saat menurun.",
          },
          {
            icon: <MdAttachMoney className="text-primary" />,
            title: "Sepadan dengan Investasi",
            description: "Kualitas dan fitur yang layak untuk petualangan jangka panjang.",
          },
          {
            icon: <MdThumbUp className="text-primary" />,
            title: "Fokus pada Petualangan",
            description: "Minim risiko teknis, jadi kamu bisa fokus menikmati setiap perjalanan.",
          },
        ],
      },

      productsData: {
        label: "mountain bike",
        headline: "Sepeda Gunung untuk Petualangan yang Sesungguhnya",
        item: [
          {
            name: "Altura X7",
            desc: "Untuk rider yang mencari kecepatan dan kelincahan di jalur ekstrem.",
            price: 45000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-1.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-1.jpeg",
          },
          {
            name: "Granite XTR",
            desc: "Dirancang untuk medan berbatu dan tanjakan curam yang menantang.",
            price: 42000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-2.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-2.jpeg",
          },
          {
            name: "Velterra 5C",
            desc: "Keseimbangan antara kontrol dan kecepatan dalam satu rangka.",
            price: 48000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-3.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-3.jpeg",
          },
          {
            name: "Orion Elite",
            desc: "Tangguh di segala cuaca dan segala jalur.",
            price: 50000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-4.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-4.jpeg",
          },
          {
            name: "Zenith Pro",
            desc: "Elegan, kokoh, dan siap menempuh jarak jauh.",
            price: 55000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-5.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-5.jpeg",
          },
          {
            name: "Strato V9",
            desc: "Teknologi terbaru untuk kendali penuh di jalur ekstrem.",
            price: 53000000,
            image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-6.jpeg",
            altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-6.jpeg",
          },
        ],
      },

      fiturData: {
        label: "FITUR UTAMA",
        headline: "Membuat Petualangan Lebih Aman & Nyaman",
        features: [
          {
            icon: <ShieldCheckIcon />,
            title: "Durabilitas Ekstrem",
            desc: "Rangka dan komponen tahan segala kondisi. Tak perlu ragu menembus jalur terberat.",
          },
          {
            icon: <BoltIcon />,
            title: "Performa Maksimal",
            desc: "Transmisi presisi, suspensi adaptif, dan pengereman hidrolik untuk kontrol penuh.",
          },
          {
            icon: <SparklesIcon />,
            title: "Desain Premium",
            desc: "Finishing matte dan desain futuristik menciptakan kesan eksklusif dan profesional.",
          },
        ],
      },

      fiturKeunggulan: {
        label: "Keunggulan",
        headline: "Keunggulan Sepeda Gunung Exling Sport",
        imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/keunggulan.png",
        item: [
          {
            icon: <MdSpeed />,
            title: "Performa Tinggi",
            description: "Melibas tanjakan dan turunan ekstrem tanpa kehilangan kendali.",
          },
          {
            icon: <MdBuild />,
            title: "Material Berkualitas",
            description: "Dipilih dari bahan terbaik untuk daya tahan dan bobot ringan.",
          },
          {
            icon: <MdSecurity />,
            title: "Garansi Resmi",
            description: "Dukungan penuh dengan garansi 1 tahun dari pabrik.",
          },
          {
            icon: <MdLocalShipping />,
            title: "Pengiriman Cepat",
            description: "Pesanan dikirim cepat dan aman ke seluruh Indonesia.",
          },
        ],
      },

      ctaData: {
        label: "Ayo Berpetualang!",
        headline: "Mulai Petualangan yang Tak Terbatas",
        description: "Medan terbaik selalu menunggu untuk ditaklukkan. Tak perlu menunggu lagi, sekaranglah waktu yang tepat.",
        imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pexels-photo-19131131.jpg",
      },

      testimoniData: {
        label: "APA KATA MEREKA?",
        headline: "Cerita dari Para Rider Profesional",
        items: [
          {
            quote: "Medan curam biasanya bikin saya tegang, tapi sepedanya terasa stabil dan responsif. Jadi lebih fokus dan percaya diri.",
            name: "Rizky Maulana",
            role: "Atlet Downhill Nasional",
            variant: "Altura X7",
            image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-91227.jpg",
          },
          {
            quote: "Biasanya sepeda trail kelihatan keren tapi berat. Granite XTR ternyata lebih ringan dan kuat, cocok untuk rutinitas gowes saya.",
            name: "Andhika Putra",
            role: "Pekerja Kreatif & Cyclist",
            variant: "Granite XTR",
            image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-220453.jpg",
          },
          {
            quote: "Waktu bersepeda di wilayah Kalimantan, saya nggak khawatir soal kerusakan. Rasanya mantap di jalur basah maupun kering.",
            name: "Laras Permata",
            role: "Pemandu Wisata Alam",
            variant: "Velterra 5C",
            image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-415829.jpg",
          },
          {
            quote: "Sepda yang membuat saya merasa punya kontrol penuh, apalagi saat turun dengan cepat. Rasanya beda dari sepeda yang biasa saya pakai.",
            name: "Bayu Santoso",
            role: "Kompetitor Enduro",
            variant: "Strato V9",
            image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-614810.jpg",
          },
        ],
      },

      faqData: {
        label: "FAQ",
        headline: "Pertanyaan Umum Seputar Sepeda Gunung",
        items: [
          {
            question: "Apakah sepeda ini cocok untuk pemula?",
            answer: "Ya. Sepeda kami dirancang untuk semua level, dari pemula hingga profesional.",
          },
          {
            question: "Apakah tersedia garansi?",
            answer: "Kami memberikan garansi resmi selama 1 tahun untuk kerusakan pabrik.",
          },
          {
            question: "Bagaimana cara pemesanan dan pengiriman?",
            answer: "Pemesanan langsung melalui website. Pengiriman 2–4 hari kerja menggunakan logistik terpercaya.",
          },
          {
            question: "Apakah tersedia sistem cicilan?",
            answer: "Tersedia. Kami bekerja sama dengan penyedia cicilan tanpa kartu kredit dan layanan paylater.",
          },
        ],
      },

      footerData: {
        tagline: "Sepeda gunung premium untuk petualang sejati.",
        credit: "Made with ❤️ in Indonesia.",
      },
    }),
  ];
}
