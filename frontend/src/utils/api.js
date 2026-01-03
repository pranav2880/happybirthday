import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000", // change if your backend port differs
});

// Named exports (matches your imports)
export const getPhotos = async () => {
  const res = await client.get("/api/photos");
  return res.data;
};

export const getSongs = async () => {
  const res = await client.get("/api/songs");
  return res.data;
};

export const getMoments = async () => {
  const res = await client.get("/api/moments");
  return res.data;
};

// Optional default export (not required, but fine to keep)
export default client;
