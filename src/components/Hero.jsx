import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImage from '@/app/assets/banner.png';

const Hero = () => {
  return (
    <section className="bg-[#0b0c0f] px-4 py-5 sm:py-7 lg:px-0">
      <div className="mx-auto flex min-h-[270px] max-w-7xl flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-[#15161b] lg:flex-row">

        <div className="w-full px-5 py-8 sm:px-7 sm:py-10 md:px-10 lg:w-1/2 lg:px-9">

          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-lime-400 sm:mb-4">
            Workout Library
          </p>

          <h1 className="max-w-[480px] text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-4 max-w-[450px] text-xs leading-5 text-gray-500 sm:text-sm">
            FITlog is a dark, no-nonsense gym companion: pick a lift,
            lock it in today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Link
              href="#Library"
              className="inline-flex items-center gap-2 rounded-md bg-lime-400 px-4 py-2.5 text-[10px] font-extrabold uppercase text-black transition hover:bg-lime-300 sm:px-5"
            >
              BROWSE WORKOUTS
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="flex h-[200px] w-full items-center justify-center sm:h-[240px] lg:h-full lg:w-1/2">
          <div className="relative h-[200px] w-[280px] sm:h-[240px] sm:w-[320px] lg:h-[270px] lg:w-[360px]">
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