import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ photo }) {
  return (
    <>
      <div id={photo.id} />
      <Link href={`/photo/${photo.id}`} className="group">
        <Image width={400} height={900} src={photo.url} alt={photo.title} />

        <div className="title-container">
          <h4 className="title">{photo.title}</h4>
        </div>
      </Link>
    </>
  );
}
