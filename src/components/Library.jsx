import React from 'react';
import LibraryCard from './libraryCard';
const getLibraryData = async ()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}
const Library = async() => {
    const workOutData = await getLibraryData()
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='my-4'id='Library'>
                <h1 className=' text-2xl font-bold'>THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
        <div className='grid grid-cols-3  gap-4'>
            {
                workOutData.map(data=> <LibraryCard key={data.id} libraryData ={data} ></LibraryCard>)
            }
        </div>
        </div>
    );
};

export default Library;