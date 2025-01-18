import { ref, get } from "firebase/database";
import { myDatabase } from "./firebaseConfig";

export const fetchSiteIdentity = async () => {
  try {
    const siteIdentityRef = ref(myDatabase, "siteIdentity");
    const snapshot = await get(siteIdentityRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error("Error fetching site identity:", error);
    throw error;
  }
};

export const updateSiteIdentity = async (data) => {
  try {
    const siteIdentityRef = ref(myDatabase, "siteIdentity");
    await set(siteIdentityRef, data);
    return true;
  } catch (error) {
    console.error("Error updating site identity:", error);
    throw error;
  }
};
