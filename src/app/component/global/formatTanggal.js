export function FormatTanggal(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  const tanggal = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const jam = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return `${tanggal} - ${jam}`;
}
