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
