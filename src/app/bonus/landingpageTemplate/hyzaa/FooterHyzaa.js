import Wrapper from "./ui/Wrapper";

export default function FooterHyzaa({ siteName, data }) {
  return (
    <footer className="bg-transparent text-white py-10">
      <Wrapper>
        <div className="text-center text-sm space-y-2">
          <p className="font-semibold text-white/90 capitalize">
            © {new Date().getFullYear()} {siteName}
          </p>
          <p className="text-white/70">{data.tagline}</p>
          <p className="text-white/50">{data.credit}</p>
        </div>
      </Wrapper>
    </footer>
  );
}
