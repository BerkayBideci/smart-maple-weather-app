import Image from "next/image";
import "./activities.css";

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
    },
  ];

  return (
    <div className="activities__main-container">
      <div className="activities__label-container">
        <Image
          src="/assets/heart-icon.svg"
          width={20}
          height={20}
          alt="Heart Icon"
        />
        <span>Activities in your area</span>
      </div>
      <div className="activities__container">
        {images.map((image, index) => (
          <div key={index} className="activities__image-container">
            <Image
              src={image.src}
              fill
              alt="Activity Image"
              className="activities__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
