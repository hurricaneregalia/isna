import { ref, get } from "firebase/database";
import { myDatabase } from "./firebaseConfig";

export const fetchSiteIdentity = async () => {
  try {
    const myDatabaseref = ref(myDatabase, "siteIdentity");
    const snapshot = await get(myDatabaseref);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const servicesRef = ref(myDatabase, "services");
    const snapshot = await get(servicesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const fetchSPages = async () => {
  try {
    const pagesRef = ref(myDatabase, "pages");
    const snapshot = await get(pagesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    console.error("Error fetching pages:", error);
    throw error;
  }
};
