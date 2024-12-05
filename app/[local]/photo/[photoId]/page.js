import PhotoDetails from "@/app/Components/SinglePhoto/PhotoDetails";
import { getDictionaries } from "@/lib/getDictionaries";

export default async function PhotoDetailsPage({ params }) {
  const { local, photoId } = await params;

  const response = await fetch(`${process.env.BASE_API_URL}/photos/${photoId}`);
  const photoDetails = await response.json();

  const dict = await getDictionaries(local);

  return (
    <div className="container my-4 lg:my-8">
      <PhotoDetails photoDetails={photoDetails} dict={dict} />
    </div>
  );
}
