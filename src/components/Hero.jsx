import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImage from '@/app/assets/banner.png';

const Hero = () => {
  return (
    <section className="bg-[#0b0c0f] px-4 py-7 lg:px-0">
      <div className="mx-auto flex min-h-[270px] max-w-7xl items-center overflow-hidden rounded-xl border border-white/10 bg-[#15161b]">


        <div className="w-full px-7 py-10 md:px-10 lg:w-1/2 lg:px-9">


          <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-lime-400">
            Workout Library
          </p>


          <h1 className="max-w-[480px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
            Train with intent.
            <br />
            Log every set.
          </h1>


          <p className="mt-4 max-w-[450px] text-xs leading-5 text-gray-500">
            FITlog is a dark, no-nonsense gym companion: pick a lift,
            lock it in today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-5 flex items-center gap-3">

            <Link
              href="#Library"
              className="inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-2.5 text-[10px] font-extrabold uppercase text-black transition hover:bg-lime-300">
              BROWSE WORKOUTS

              <span>→</span>
            </Link>

          </div>
        </div>


        <div className="hidden h-full w-1/2 items-center justify-center lg:flex">
          <div className="relative h-[270px] w-[360px]">
            <Image
              src={heroImage}
              alt="Workout"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;