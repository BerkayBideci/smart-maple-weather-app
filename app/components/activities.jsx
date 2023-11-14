import Image from "next/image";

const Activities = () => {

  const images = [
    {
      src: "/assets/forest.jpg",
    },
    {
      src: "/assets/forest-2.jpg",
    },
    {
      src: "/assets/waterpark.jpg",
    },
    {
      src: "/assets/beach.jpg",
    }
  ]

  return (
    <div className="bg-secondary/40 rounded-[1.75rem] px-9 py-10 flex flex-col gap-6">
      <div className="flex items-center justify-center 2xl:justify-start">
        <Image src="/assets/heart-icon.svg" width={20} height={20} alt="Heart Icon" />
        <span>Activities in your area</span>
      </div>
      <div className="flex lg:items-center lg:justify-around 2xl:justify-center scrollable overflow-x-auto gap-6">
        {images.map((image, index) => (
          <div key={index} className="h-[12.5rem] w-[12.5rem] relative overflow-hidden rounded-md brightness-75 hover:brightness-100 transition-all ease-in delay-150 cursor-pointer shrink-0">
            <Image src={image.src} fill alt="Activity Image" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
