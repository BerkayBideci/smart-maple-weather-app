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
    <div className="bg-secondary/40 rounded-[1.75rem] p-11 flex flex-col gap-6">
      <div className="flex items-center">
        <Image src="/assets/heart-icon.svg" width={20} height={20} alt="Heart Icon" />
        <span>Activities in your area</span>
      </div>
      <div className="flex gap-6">
        {images.map((image, index) => (
          <div key={index} className="h-[12.5rem] w-[12.5rem] overflow-hidden relative rounded-md brightness-75 hover:brightness-100 hover:-translate-y-3 transition-all ease-in delay-150 cursor-pointer">
            <Image src={image.src} fill alt="Activity Image" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
