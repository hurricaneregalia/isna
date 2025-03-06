"use client"; // Jangan lupa ini jika Anda menggunakan Next.js

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    landingPage: null,
    interestList: [],
    solutionList: [],
    skillList: [],
    servicesList: [],
    featureServicesListItems: [],
    siteIdentities: null,
    bonusListItems: [],
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/lokal");
      setData({
        landingPage: response.data.landingPage[0] || null,
        interestList: response.data.interestListItems || [],
        skillList: response.data.skillListItems || [],
        solutionList: response.data.solutionListItems || [],
        servicesList: response.data.servicesListItems || [],
        featureServicesListItems: response.data.featureServicesListItems || [],
        siteIdentities: response.data.siteIdentities[0] || null,
        bonusListItems: response.data.bonusListItems || [],
        loading: false,
        error: null,
      });
    } catch (err) {
      setData({
        ...data,
        loading: false,
        error: err.message || "Terjadi kesalahan",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

// Pastikan ini adalah ekspor named export
export const useData = () => useContext(DataContext);
