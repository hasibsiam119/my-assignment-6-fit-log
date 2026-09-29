
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const LibraryCard = ({libraryData}) => {


   return (
  <Link href={`/${libraryData.id}`}>
  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#15161b]">
   
    <div className="h-32 w-full">
       <Image
        src={libraryData.image}
        alt={libraryData.name}
        width={500}
        height={300}
        className="h-full w-full object-cover"
      />
    </div>


    <div className="p-4">
  
      <div className="mb-3 flex flex-wrap gap-2">
        {libraryData.muscleGroups.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full bg-lime-400 px-2.5 py-1 text-[9px] font-bold uppercase text-black"
          >
            {muscle}
          </span>
        ))}
      </div>

  
      <h3 className="text-sm font-bold uppercase text-white">
        {libraryData.name}
      </h3>

    
      <p className="mt-1 text-[10px] text-gray-500">
        {libraryData.equipment}
      </p>

   
      <div className="my-3 border-t border-white/5" />

            <div className="flex items-center justify-between text-[10px] text-gray-400">
        <span>◷ {libraryData.duration} min</span>
        <span>● {libraryData.caloriesBurned} kcal</span>
        <span>☆ {libraryData.rating}</span>
      </div>
    </div>
  </div>
  </Link>
);
};

export default LibraryCard;