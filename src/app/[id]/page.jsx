import Image from 'next/image';
import React from 'react';

import Todaysbtn from '@/components/todaysbtn';
import Savebtn from '@/components/savebtn';

const DetailsPage = async ({ params }) => {

    const { id } = await params
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    const workData = data.find(work => work.id === Number(id))

    return (
        <div className='bg-[#0f1014] '>
        <div className="mx-auto grid max-w-6xl gap-7 rounded-xl bg-[#0f1014] p-4 md:grid-cols-2 my-5 ">


            <div className="overflow-hidden rounded-lg">

                <Image
                    src={workData.image}
                    alt={workData.name}
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                />
            </div>

          
            <div className="py-1">
                <h1 className="text-2xl font-black uppercase text-white">
                    {workData.name}
                </h1>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                    {workData.description}
                </p>

                <div className="mt-4 flex gap-2">
                    {workData.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-3 py-1 text-[9px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>


                <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-[#171920]">
                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">EQUIPMENT</span>
                        <span className="text-right text-gray-300">{workData.equipment}</span>
                    </div>

                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">DIFFICULTY</span>
                        <span className="text-right text-gray-300">{workData.difficulty}</span>
                    </div>

                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">SETS</span>
                        <span className="text-right text-gray-300">{workData.sets}</span>
                    </div>

                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">REPS</span>
                        <span className="text-right text-gray-300">{workData.reps}</span>
                    </div>

                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">DURATION</span>
                        <span className="text-right text-gray-300">{workData.duration} min</span>
                    </div>

                    <div className="grid grid-cols-2 border-b border-white/5 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">CALORIES</span>
                        <span className="text-right text-gray-300">
                            {workData.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="grid grid-cols-2 px-4 py-3 text-[10px]">
                        <span className="text-gray-500">RATING</span>
                        <span className="text-right text-gray-300">{workData.rating}</span>
                    </div>
                </div>

  
                <h2 className="mt-5 text-xs font-bold uppercase text-white">
                    Instructions
                </h2>

                <ol className="mt-2 space-y-2 text-[10px] leading-4 text-gray-400">
                    {workData.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-2">
                            <span>{index + 1}.</span>
                            <span>{instruction}</span>
                        </li>
                    ))}
                </ol>


                <div className="mt-5 flex gap-2">
                    <Todaysbtn workData ={workData}></Todaysbtn>

                    <Savebtn workData ={workData}></Savebtn>
                </div>
            </div>
        </div>
        </div>
    );

};

export default DetailsPage;