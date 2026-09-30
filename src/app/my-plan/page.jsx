'use client'
import PlanCard from '@/components/planCard';
import { planContext } from '@/context/planProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';


const MyPlan = () => {
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(planContext)
    const [activeTab, setActiveTab] = useState("today");
    const activePlan = activeTab === "today" ? todaysPlan : savedPlan;
    const handleRemove = (id, type) => {
        if (type === "today") {
            setTodaysPlan(
                todaysPlan.filter(
                    (workout) => workout.id !== id
                )
            );

        } else {
            setSavedPlan(
                savedPlan.filter(
                    (workout) => workout.id !== id
                )
            );


        };
        toast.error('Workout removed!');
    }


    const [shortBy, setShortBy] = useState('Duration')

    const sortPlans = (plans)=>{
        const sortedPlans = [...plans]
        if(shortBy ==='Duration'){
            sortedPlans.sort((a,b)=>b.duration -a.duration)
        } else if(shortBy ==='Calories'){
            sortedPlans.sort((a,b)=>b.caloriesBurned -a.caloriesBurned)
        } else if(shortBy ==='Rating'){
             sortedPlans.sort((a,b)=>b.rating -a.rating)
        }
        return sortedPlans
    }



    const sortedTodaysPlan =sortPlans(todaysPlan)
    const sortedSavedPlan = sortPlans(savedPlan)

    return (
        <div className='bg-[#0b0c0f] '>
            <div className='max-w-7xl mx-auto  space-y-10 my-10'>
                <div>
                    <h1 className='text-2xl font-bold'>MY PLAN</h1>
                    <p>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className='rounded-2xl border border-white/30 flex justify-around gap-10  bg-[#13161D] p-9'>
                    <div className='px-10'>
                        <h4>Exercise</h4>
                        <h2 className='font-bold text-3xl text-lime-400'>{activePlan.length}</h2>
                    </div>
                    <div className='border-l border-white/10 px-10'>
                        <h4>Minutes</h4>
                        <h2 className='font-bold text-3xl'>
                            {

                                activePlan.reduce((total, num) => total + num.duration, 0)

                            }
                        </h2>
                    </div>
                    <div className='border-l border-white/10 px-10'>
                        <h4>Calories</h4>
                        <h2 className='font-bold text-3xl'>                        {

                            activePlan.reduce((total, num) => total + num.caloriesBurned, 0)

                        }</h2>
                    </div>
                </div>
                <div className='flex justify-end '>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Sort By</legend>
                        <select  className="select" value={shortBy} onChange={(e)=> setShortBy(e.target.value)}>
                           
                            <option value={'Duration'}>Duration</option>
                            <option value={'Calories'}>Calories</option>
                            <option value={'Rating'}>Rating</option>
                        </select>
                    </fieldset>
                </div>
                <div className="tabs tabs-lift ">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Todays Plan" checked={activeTab === "today"}
                        onChange={() => setActiveTab("today")} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            todaysPlan.length === 0 ? <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
                                <h2 className="text-lg font-bold text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href='/#Library'><button className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black shadow-lg shadow-lime-400/20 hover:bg-lime-300">
                                    Go to workouts
                                </button>
                                </Link>
                            </div>
                                :
                                <PlanCard todaysPlan={sortedTodaysPlan} type="today" onRemove={handleRemove}  ></PlanCard>
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" checked={activeTab === "saved"}
                        onChange={() => setActiveTab("saved")} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {
                            savedPlan.length === 0 ?
                                <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
                                    <h2 className="text-lg font-bold text-white">
                                        NOTHING HERE YET
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link href='/#Library'><button className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black shadow-lg shadow-lime-400/20 hover:bg-lime-300">
                                        Go to workouts
                                    </button>
                                    </Link>
                                </div>
                                :
                                <PlanCard savedPlan={sortedSavedPlan} type="saved" onRemove={handleRemove}></PlanCard>
                        }




                    </div>


                </div>

            </div>
        </div>

    );
};

export default MyPlan;