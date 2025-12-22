"use client";
import React, { useState, useMemo } from "react";
import { savheeraData } from "../database/SavheeraDatabase";

export default function SavheeraProductListSection({ data, secId }) {
  const { productList } = savheeraData;
  const [selectedOccasion, setSelectedOccasion] = useState("Semua");
  const [selectedMaterial, setSelectedMaterial] = useState("Semua");
  const [sortBy, setSortBy] = useState("Rekomendasi");

  // Filter and sort collections
  const filteredCollections = useMemo(() => {
    let filtered = [...productList.collections];

    // Filter by occasion
    if (selectedOccasion !== "Semua") {
      filtered = filtered.filter((item) => item.occasion.includes(selectedOccasion));
    }

    // Filter by material
    if (selectedMaterial !== "Semua") {
      filtered = filtered.filter((item) => item.material.includes(selectedMaterial));
    }

    // Sort collections
    switch (sortBy) {
      case "Harga Terendah":
        filtered.sort((a, b) => (a.salePrice || a.regularPrice) - (b.salePrice || b.regularPrice));
        break;
      case "Harga Tertinggi":
        filtered.sort((a, b) => (b.salePrice || b.regularPrice) - (a.salePrice || a.regularPrice));
        break;
      case "Terbaru":
        filtered.sort((a, b) => b.isNewArrival - a.isNewArrival);
        break;
      case "Limited Edition":
        filtered.sort((a, b) => b.isLimited - a.isLimited);
        break;
      default: // Rekomendasi
        // Keep original order for recommendations
        break;
    }

    return filtered;
  }, [selectedOccasion, selectedMaterial, sortBy, productList.collections]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getDiscountPercentage = (regularPrice, salePrice) => {
    if (!salePrice) return 0;
    return Math.round(((regularPrice - salePrice) / regularPrice) * 100);
  };

  return (
    <div id={secId} className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-base-content mb-4">{productList.title}</h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">{productList.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="bg-base-100 rounded-3xl p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Occasion Filter */}
            <div>
              <label className="block text-sm font-medium text-base-content mb-3">Momen Spesial</label>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="w-full px-4 py-3 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-base-100 text-base-content"
              >
                {productList.filters.occasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="block text-sm font-medium text-base-content mb-3">Material</label>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full px-4 py-3 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-base-100 text-base-content"
              >
                {productList.filters.materials.map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-base-content mb-3">Urutkan</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-base-100 text-base-content"
              >
                {productList.filters.sortBy.map((sort) => (
                  <option key={sort} value={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCollections.map((collection) => {
            const discountPercentage = getDiscountPercentage(collection.regularPrice, collection.salePrice);
            const currentPrice = collection.salePrice || collection.regularPrice;

            return (
              <div key={collection.id} className="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                {/* Product Image */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <img src={collection.image} alt={collection.collectionName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {collection.isLimited && <span className="bg-primary text-base-100 px-3 py-1 rounded-full text-xs font-semibold">Limited Edition</span>}
                    {collection.isNewArrival && <span className="bg-secondary text-base-content px-3 py-1 rounded-full text-xs font-semibold">New Arrival</span>}
                    {discountPercentage > 0 && <span className="bg-accent text-base-100 px-3 py-1 rounded-full text-xs font-semibold">-{discountPercentage}%</span>}
                  </div>

                  {/* Out of Stock Overlay */}
                  {!collection.inStock && (
                    <div className="absolute inset-0 bg-base-900/70 flex items-center justify-center">
                      <span className="bg-base-100 text-base-content px-4 py-2 rounded-lg text-sm font-semibold">Habis</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  {/* Collection Name */}
                  <h3 className="text-xl font-serif text-base-content mb-2">{collection.collectionName}</h3>

                  {/* Description */}
                  <p className="text-base-content/70 text-sm mb-4">{collection.description}</p>

                  {/* Material */}
                  <p className="text-xs text-base-content/60 mb-4">{collection.material}</p>

                  {/* Occasion Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {collection.occasion.slice(0, 2).map((occ) => (
                      <span key={occ} className="bg-base-200 text-base-content/70 px-2 py-1 rounded-lg text-xs">
                        {occ}
                      </span>
                    ))}
                    {collection.occasion.length > 2 && <span className="text-xs text-base-content/50">+{collection.occasion.length - 2} lagi</span>}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-bold text-primary">{formatPrice(currentPrice)}</span>
                      {collection.salePrice && <span className="text-lg text-base-content/50 line-through">{formatPrice(collection.regularPrice)}</span>}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      className={`flex-1 bg-primary text-base-100 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                        !collection.inStock ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!collection.inStock}
                    >
                      {productList.ctaExploreCollection}
                    </button>
                    <button
                      className={`flex-1 bg-secondary text-base-content py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                        !collection.inStock ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!collection.inStock}
                    >
                      {productList.ctaViewDetails}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCollections.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-base-content/70 mb-4">Tidak ada koleksi yang cocok dengan filter Anda</p>
            <p className="text-base-content/50 mb-8">Coba ubah filter atau jelajahi semua koleksi kami</p>
            <button
              onClick={() => {
                setSelectedOccasion("Semua");
                setSelectedMaterial("Semua");
                setSortBy("Rekomendasi");
              }}
              className="bg-primary text-base-100 px-8 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-200"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-base-100 rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-serif text-base-content mb-4">Temukan Pilihan yang Membuat Momen Anda Bersinar</h3>
          <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">Konsultasi gratis dengan jewelry expert kami dan jelajahi koleksi eksklusif yang dibuat khusus untuk Anda</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-base-100 px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-200 hover:shadow-lg">Jelajahi Semua Koleksi</button>
            <button className="bg-secondary text-base-content px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-200 hover:shadow-lg">Konsultasi Gratis</button>
          </div>
        </div>
      </div>
    </div>
  );
}
