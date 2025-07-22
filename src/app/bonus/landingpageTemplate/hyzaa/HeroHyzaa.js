import { Inter } from "next/font/google";
import { FaBiking } from "react-icons/fa";
import Link from "next/link";
import Divider from "./ui/Divider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function HeroHyzaa({ targetId, data }) {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-white py-20"
      style={{
        backgroundImage: `url(${data.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-slate-900/50" />
      <div className={`relative text-center px-6 max-w-2xl ${inter.className}`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white sm:w-11/12 w-10/12 mx-auto">{data.headline}</h1>
        <p className="text-base-100/75 text-lg mb-6 sm:w-11/12 w-10/12 mx-auto">{data.subheadline}</p>
        <Divider my="my-10" />
        <Link href={targetId} className="btn btn-lg btn-primary border-success border  ">
          <span className="animate-pulse flex gap-2 items-center">
            <FaBiking />
            Lihat Sepeda
          </span>
        </Link>
      </div>
    </section>
  );
}
