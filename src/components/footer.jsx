import Image from "next/image";
import logo from '@/app/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#08090C] mt-10">
      <div className="container mx-auto px-5 py-8 flex items-center justify-between">

        
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={14}
            height={14}
          />

          <span className="text-white text-xs font-bold">
            FITLOG
          </span>
        </div>

      
        <p className="text-[11px] text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;