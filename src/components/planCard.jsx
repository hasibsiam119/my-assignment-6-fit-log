
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PlanCard = ({ todaysPlan, savedPlan, onRemove, type }) => {
    const plan = todaysPlan || savedPlan;

    const [completed, setCompleted] = useState([]);

    const handleComplete = (id) => {
        setCompleted((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
            toast.success('Workout marked as done!');

    };

    return (
        <div className="space-y-3">
            {plan.map((workout) => {

                const isCompleted = completed.includes(workout.id);

                return (
                    <div
                        key={workout.id}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#13161D] p-3"
                    >

                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={100}
                            height={65}
                            className="h-[65px] w-[100px] rounded-lg object-cover"
                        />


                        <div className="flex-1">
                            <h3 className="text-sm font-bold uppercase text-white">
                                {workout.name}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                {workout.category}
                            </p>

                            <div className="mt-2 flex gap-4 text-xs text-gray-400">
                                <span>◷ {workout.duration} min</span>
                                <span>🔥 {workout.caloriesBurned} kcal</span>
                            </div>
                        </div>


                        <Link
                            href={`/${workout.id}`}
                            className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300 hover:bg-white/10"
                        >
                            View Details
                        </Link>


                        <button
                            disabled={isCompleted}
                            onClick={() => handleComplete(workout.id)}
                            className={`rounded-full px-4 py-2 text-xs font-semibold ${isCompleted
                                    ? 'cursor-not-allowed bg-gray-700 text-gray-400'
                                    : 'bg-lime-400 text-black hover:bg-lime-300'
                                }`}
                        >
                            {isCompleted
                                ? '✓ Completed'
                                : '✓ Mark as Done'}
                        </button>


                        <button
                            className="text-xl text-gray-500 hover:text-red-400"
                            onClick={() =>
                                onRemove(workout.id, type)
                            }
                        >
                            ×
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default PlanCard;

