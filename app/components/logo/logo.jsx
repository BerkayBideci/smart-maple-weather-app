import Image from "next/image";
import "./logo.css";

const Logo = () => {
  return (
    <Image
      src="/logo/smart-maple-logo.png"
      width={275}
      height={60}
      alt="Smart Maple Logo"
      className="logo"
    />
  );
};

export default Logo;
