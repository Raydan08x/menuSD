const configured = import.meta.env.VITE_API_URL?.trim();
export const API_URL = (configured || "/api").replace(/\/$/, "");
