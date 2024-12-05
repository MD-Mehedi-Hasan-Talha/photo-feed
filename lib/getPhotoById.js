import photos from "@/data/photos.json";

export default function getPhotoById(id) {
  return photos.find((photo) => photo.id === id);
}
