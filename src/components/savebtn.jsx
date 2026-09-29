'use client'
import { planContext } from '@/context/planProvider';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Savebtn = ({workData}) => {
     const { savedPlan, setSavedPlan} = useContext(planContext)
        const handleSavebtn = () => {
            const available = savedPlan.find(data=>workData.id ===data.id )
            if(!available){
            setSavedPlan([...savedPlan,workData])
            toast.success(`${workData.name} added to Saved plan successfully`)
        }else{
            toast.warning('Already added')
        }
        }
    return (
        <button onClick={handleSavebtn} className="rounded-md border border-white/20 px-4 py-2 text-[10px] text-gray-400 hover:border-white/40 hover:text-white">
                        ♡ Save for later
        </button>
    );
};

export default Savebtn;