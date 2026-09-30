import Image from "next/image";
import logo from '@/app/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#08090C] mt-10">
      <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col gap-4 items-center justify-between sm:flex-row sm:gap-0">

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

        <p className="text-[11px] text-gray-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;