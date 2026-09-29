'use client'
import React, { useContext } from 'react';
import { planContext } from '@/context/planProvider';
import { toast } from 'react-toastify';
const Todaysbtn = ({workData}) => {

    const { todaysPlan, setTodaysPlan } = useContext(planContext)
    const handleTodaysbtn = () => {
        const available = todaysPlan.find(data=>workData.id ===data.id )
        if(!available){
        setTodaysPlan([...todaysPlan,workData])
        toast.success(`${workData.name} added to Todays plan successfully`)
    }else{
        toast.warning('Already added')
    }
    }
    return (
        <button onClick={handleTodaysbtn} className="rounded-md bg-lime-400 px-4 py-2 text-[10px] font-bold text-black hover:bg-lime-300">
            ▣ Add to today&apos;s plan
        </button>
    );
};

export default Todaysbtn;