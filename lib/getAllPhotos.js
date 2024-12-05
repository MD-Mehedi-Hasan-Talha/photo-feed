import photos from "@/data/photos.json";

export default function getAllPhotos() {
  const requiredData = photos.map((photo) => {
    return { id: photo.id, title: photo.title, url: photo.url };
  });
  return requiredData;
}
