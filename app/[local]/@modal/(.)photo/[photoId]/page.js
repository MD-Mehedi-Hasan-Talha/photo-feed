import Modal from "@/app/Components/Modal/Modal";
import PhotoDetails from "@/app/Components/SinglePhoto/PhotoDetails";
import { getDictionaries } from "@/lib/getDictionaries";

export default async function PhotoDetailsModal({ params }) {
  const { local, photoId } = await params;

  const response = await fetch(`${process.env.BASE_API_URL}/photos/${photoId}`);
  const photoDetails = await response.json();

  const dict = await getDictionaries(local);

  return (
    <Modal photoDetails={photoDetails}>
      <PhotoDetails photoDetails={photoDetails} dict={dict} />
    </Modal>
  );
}
