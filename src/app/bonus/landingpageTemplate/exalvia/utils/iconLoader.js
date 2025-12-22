// Icon Loader - Helper untuk memuat icon dari database
import ExalviaDatabase from "../database/ExalviaDatabase";

export function getIcon(iconName) {
  if (!iconName || !ExalviaDatabase.iconMappings) return null;
  
  return ExalviaDatabase.iconMappings[iconName] || null;
}

export default ExalviaDatabase.iconMappings;

