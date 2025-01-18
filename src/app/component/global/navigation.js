import React from "react";
import ThemeSwitch from "./themeSwitch";

export default function Navigation() {
  return (
    <div>
      Navigation
      <ThemeSwitch />
      <button className="btn btn-primary">Theme</button>
    </div>
  );
}
