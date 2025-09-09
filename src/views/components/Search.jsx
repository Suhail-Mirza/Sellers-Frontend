import React from 'react'

const Search = ({setPerPage,searchValue,setSearchValue}) => {
  return (
    <div className='justify-between items-center flex'>
        <select onChange={(e)=>setPerPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
        <input onChange={(e)=> setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'/>
    </div>
  )
}

export default Search