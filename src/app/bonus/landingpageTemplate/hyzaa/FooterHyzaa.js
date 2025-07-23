export default function FooterHyzaa({ siteName, data }) {
  return (
    <footer className="bg-primary text-base-content py-10">
      <div className="text-center text-sm space-y-2 opacity-90 ">
        <p className="font-semibold capitalize">
          © {new Date().getFullYear()} {siteName}
        </p>
        <p>{data.tagline}</p>
        <p>{data.credit}</p>
      </div>
    </footer>
  );
}
