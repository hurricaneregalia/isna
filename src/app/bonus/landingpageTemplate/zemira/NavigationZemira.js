import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";

export default function NavigationZemira() {
  return (
    <div className="flex lg:w-10/12 w-12 justify-between mx-auto">
      <span>siteName</span>
      <ModalThemes title="Pilih tema" btnTxt="Tema">
        <ThemeChanger />
      </ModalThemes>
    </div>
  );
}
