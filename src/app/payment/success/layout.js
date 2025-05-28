import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function packageLayout({ children }) {
  return <section className={roboto.className}>{children}</section>;
}
