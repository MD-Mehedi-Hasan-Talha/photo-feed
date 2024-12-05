import Image from "next/image";

export default function PhotoDetails({ photoDetails, dict }) {
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          width={1000}
          height={1000}
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={photoDetails.url}
          alt={photoDetails.title}
        />
      </div>
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">
          {photoDetails.title}
        </h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photoDetails.tags.map((tag) => `#${tag} `)}
        </div>
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">{photoDetails.views}</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">{photoDetails.share}</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.uploadedOn}</span>
            <span className="font-bold">{photoDetails.uploaded}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
                width={100}
                height={100}
                className="size-12 lg:size-14 rounded-full border"
                src={photoDetails.author.avatar}
                alt="avatar"
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">
                  {photoDetails.author.name}
                </h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {photoDetails.author.followers} {dict.followers}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                width={50}
                height={50}
                src="/assets/icons/follow.svg"
                className="w-5 h-5"
                alt="follow"
              />
              {dict.follow}
            </button>
          </div>
          <p className="text-xs lg:text-sm text-black/60">
            {photoDetails.author.bio}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={50}
                height={50}
                src="/assets/icons/heart.svg"
                className="w-5 h-5"
                alt="heart"
              />
              {photoDetails.likes}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={50}
                height={50}
                src="/assets/icons/save.svg"
                className="w-5 h-5"
                alt="save"
              />
              {dict.save}
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                width={50}
                height={50}
                src="/assets/icons/share.svg"
                className="w-5 h-5"
                alt="share"
              />
              {dict.share}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
