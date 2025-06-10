export default function Halvora({ landingPage }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{landingPage.name}</h1>
      <p>{landingPage.description}</p>
    </div>
  );
}
