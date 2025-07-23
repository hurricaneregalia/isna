export default function HeadlineText({ h = "h1", text, className = "" }) {
  const Tag = h;

  // Default Tailwind classes based on heading level
  const headingStyles = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl ",
    h4: "text-xl",
    h5: "",
    h6: "",
  };

  const baseStyle = headingStyles[h] || headingStyles.h1;

  return <Tag className={`font-bold ${baseStyle} ${className}`}>{text}</Tag>;
}
