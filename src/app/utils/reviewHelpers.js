// Review Helper Components for Form Data Brand
// Extracted from main component for reusability and maintainability

import React from 'react';

// ReviewItem Component - Single review item display
export const ReviewItem = ({ label, value, type = 'text' }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return null;
  }

  const renderValue = () => {
    switch (type) {
      case 'array':
        return (
          <ul className="list-disc list-inside text-sm">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case 'object':
        return (
          <div className="space-y-2">
            {Object.entries(value).map(([key, val]) => (
              <div key={key} className="text-sm">
                <span className="font-medium">{key}:</span> {val}
              </div>
            ))}
          </div>
        );
      case 'socialMedia':
        return (
          <div className="space-y-1">
            {Object.entries(value).map(([platform, url]) => (
              url && (
                <div key={platform} className="text-sm">
                  <span className="font-medium capitalize">{platform}:</span>{' '}
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {url}
                  </a>
                </div>
              )
            ))}
          </div>
        );
      case 'visionMission':
        return (
          <div className="space-y-3">
            {value.map((item, index) => (
              <div key={index} className="border-l-2 border-primary pl-3">
                <h5 className="font-medium text-sm">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        );
      case 'certifications':
        return (
          <ul className="list-disc list-inside text-sm">
            {value.map((cert, index) => (
              cert && <li key={index}>{cert}</li>
            ))}
          </ul>
        );
      case 'feedback':
        return (
          <div className="space-y-3">
            {value.map((item, index) => (
              <div key={index} className="border rounded p-2 bg-gray-50">
                <div className="font-medium text-sm">{item.customer}</div>
                <div className="text-sm text-gray-600">{item.feedback}</div>
              </div>
            ))}
          </div>
        );
      case 'competitors':
        return (
          <div className="space-y-3">
            {value.map((competitor, index) => (
              <div key={index} className="border rounded p-2 bg-gray-50">
                <div className="font-medium text-sm">{competitor.name}</div>
                <div className="text-sm">
                  <span className="text-green-600">Strength:</span> {competitor.strength}
                </div>
                <div className="text-sm">
                  <span className="text-red-600">Weakness:</span> {competitor.weakness}
                </div>
              </div>
            ))}
          </div>
        );
      case 'problemsSolutions':
        return (
          <div className="space-y-3">
            {value.map((item, index) => (
              <div key={index} className="border rounded p-2 bg-gray-50">
                <div className="text-sm">
                  <span className="text-red-600">Problem:</span> {item.problem}
                </div>
                <div className="text-sm">
                  <span className="text-green-600">Solution:</span> {item.solution}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return <span className="text-sm">{value}</span>;
    }
  };

  return (
    <div className="border-b border-gray-200 pb-2">
      <div className="font-medium text-sm text-gray-700 mb-1">{label}</div>
      {renderValue()}
    </div>
  );
};

// ReviewList Component - Container for all review items
export const ReviewList = ({ formData }) => {
  return (
    <div className="space-y-4">
      {/* Identity Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Identitas Brand</h3>
        <ReviewItem label="Nama Brand" value={formData.brandName} />
        <ReviewItem label="Slogan" value={formData.slogan} />
        <ReviewItem label="Peran" value={formData.role} />
        <ReviewItem label="Nama Lengkap" value={formData.fullName} />
        <ReviewItem label="Email" value={formData.email} />
        <ReviewItem label="No. Telepon" value={formData.phone} />
        <ReviewItem label="Social Media" value={formData.socialMedia} type="socialMedia" />
      </div>

      {/* Vision & Mission Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Visi & Misi</h3>
        <ReviewItem label="Visi" value={formData.vision} type="visionMission" />
        <ReviewItem label="Misi" value={formData.mission} type="visionMission" />
        <ReviewItem label="Tujuan Jangka Panjang" value={formData.longTermGoal} type="visionMission" />
      </div>

      {/* Target Audience Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Target Audiens</h3>
        <ReviewItem label="Rentang Usia" value={`${formData.targetAgeMin} - ${formData.targetAgeMax} tahun`} />
        <ReviewItem label="Gender" value={formData.targetGender} />
        <ReviewItem label="Lokasi" value={formData.targetLocation} />
        <ReviewItem label="Pekerjaan" value={formData.targetOccupation} />
        <ReviewItem label="Penghasilan" value={formData.targetIncome} />
        <ReviewItem label="Pendidikan" value={formData.targetEducation} />
        <ReviewItem label="Minat" value={formData.targetInterests} type="array" />
      </div>

      {/* Product Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Produk & Layanan</h3>
        <ReviewItem label="Produk Utama" value={formData.mainProduct} />
        <ReviewItem label="Keunggulan Produk" value={formData.productAdvantages} />
        <ReviewItem label="Sertifikasi" value={formData.certifications} type="certifications" />
      </div>

      {/* Visual Identity Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Identitas Visual</h3>
        <ReviewItem label="Warna Brand" value={formData.brandColors} />
        <ReviewItem label="Tipografi" value={formData.typography} />
        <ReviewItem label="Gaya Visual" value={formData.visualStyle} />
      </div>

      {/* Customer Experience Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Pengalaman Pelanggan</h3>
        <ReviewItem label="Testimoni" value={formData.customerFeedback} type="feedback" />
      </div>

      {/* Competitor Analysis Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Analisis Kompetitor</h3>
        <ReviewItem label="Kompetitor" value={formData.competitors} type="competitors" />
      </div>

      {/* Problems & Solutions Section */}
      <div className="border rounded p-4">
        <h3 className="font-bold text-lg mb-3">Masalah & Solusi</h3>
        <ReviewItem label="Masalah dan Solusi" value={formData.problemsSolutions} type="problemsSolutions" />
      </div>
    </div>
  );
};
