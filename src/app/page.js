import Content from "./component/global/content";
import HeaderFooter from "./component/global/headerFooter";

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Content />
      </main>
    </HeaderFooter>
  );
}
