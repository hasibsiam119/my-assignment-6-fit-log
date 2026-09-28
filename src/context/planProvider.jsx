'use client'
import React, { createContext, useState } from 'react';

export const planContext = createContext({})

const PlanProvider = ({children}) => {
    const [todaysPlan , setTodaysPlan] = useState([])
    const [savedPlan, setSavedPlan] = useState([])
    const sharedData = {todaysPlan , setTodaysPlan,savedPlan, setSavedPlan}
    return <planContext.Provider value={sharedData}>{children}</planContext.Provider>
};

export default PlanProvider;