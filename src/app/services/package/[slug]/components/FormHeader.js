import React from "react";
import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import { TiPencil } from "react-icons/ti";

const FormHeader = ({ serviceName }) => {
  return (
    <div className="bg-base-200/50 p-8 border-b border-base-200">
      <TextHeadingTitle 
        title="Lengkapi Data Pemesanan" 
        iconTitle={<TiPencil className="text-primary" />} 
        titleCase={2} 
        h={3} 
        cssStyle="mb-2" 
        iconPosition="left" 
      />
      <p className="text-gray-500 mt-2">
        Silakan isi formulir di bawah ini untuk melanjutkan proses pemesanan layanan <strong>{serviceName}</strong>.
      </p>
    </div>
  );
};

export default FormHeader;
