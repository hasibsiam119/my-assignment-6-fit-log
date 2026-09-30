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
                        className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#13161D] p-3 sm:flex-row sm:items-center sm:gap-4"
                    >

                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={100}
                            height={65}
                            className="h-[180px] w-full rounded-lg object-cover sm:h-[65px] sm:w-[100px]"
                        />

                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold uppercase text-white">
                                {workout.name}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                {workout.equipment}
                            </p>

                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                                <span>◷ {workout.duration} min</span>
                                <span>🔥 {workout.caloriesBurned} kcal</span>
                                <span>☆ {workout.rating}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                            <Link
                                href={`/${workout.id}`}
                                className="rounded-full border border-white/20 px-4 py-2 text-xs text-gray-300 hover:bg-white/10"
                            >
                                View Details
                            </Link>

                            <button
                                disabled={isCompleted}
                                onClick={() => handleComplete(workout.id)}
                                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                                    isCompleted
                                        ? 'cursor-not-allowed bg-gray-700 text-gray-400'
                                        : 'bg-lime-400 text-black hover:bg-lime-300'
                                }`}
                            >
                                {isCompleted
                                    ? '✓ Completed'
                                    : '✓ Mark as Done'}
                            </button>

                            <button
                                className="px-2 text-xl text-gray-500 hover:text-red-400"
                                onClick={() =>
                                    onRemove(workout.id, type)
                                }
                            >
                                ×
                            </button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default PlanCard;