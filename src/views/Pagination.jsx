import React from 'react'
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"

const Pagination = ({pageNumber,setPageNumber,totalItem,perPage, showItem}) => {
 let totalPage=Math.ceil(totalItem/perPage)
 let startPage=pageNumber
 let diff=totalPage- pageNumber

 if(diff<=showItem){
    startPage=totalPage-showItem
 }

 let endPage= startPage<0 ?showItem :showItem + startPage 

 if(startPage<=0){
    startPage=1
 }


 const creatButton=()=>{
    const buttons=[]
    for(let i=startPage; i<endPage; i++){
        buttons.push(
            <li onClick={()=>setPageNumber(i)} className={`${pageNumber===i?'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white hover:bg-indigo-400 hover:shadow-indigo-500/50 hover:text-white w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer':"bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6] w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer"}`}>
                {i}
            </li>
        )
    }
    return buttons
 }

 return (
    <ul className='flex gap-3'>
        {
            pageNumber>1 && <li onClick={()=>setPageNumber(pageNumber-1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[black]'>
                <MdKeyboardDoubleArrowLeft/>
            </li>
        }
        {
            creatButton()
        }
        {
            pageNumber<totalPage-1 && <li onClick={()=>setPageNumber(pageNumber+1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[black]'>
                <MdKeyboardDoubleArrowRight/>
            </li>
        }
    </ul>
)


}

export default Pagination