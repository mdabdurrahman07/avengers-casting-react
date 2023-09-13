/* eslint-disable react/prop-types */
import swal from 'sweetalert';
import { useState } from "react";
import Cart from './../Cart/Cart';

/* eslint-disable react/jsx-key */
const Main = ({card}) => {
  const [SelectActor , SetSelectActor ] = useState([])
  const [TotalSalary , SetTotalSalary ] = useState()
  const [RemainingCount , SetRemainingCount] = useState()

  const handleSelectedActors = (info) =>{
    const isExist = SelectActor.find(common => common.id === info.id)
    let count = info.salary
    if(isExist){
     return swal("Already Added", "You Can’t Add Same Items", "error");
    }
    
   else{
    SelectActor.forEach(items =>{
      count += items.salary 
    })
    const Remaining = 20000 - count
    SetTotalSalary(count)
    SetRemainingCount(Remaining)
    return  SetSelectActor([...SelectActor , info])
   }
   
   
  }
  
     return (
          <>
          <div className="flex">
          <div className="flex flex-wrap gap-5 w-2/3 m-auto">
       
       {
           card.map(info => (
               <div className="card w-80 bg-base-100 shadow-xl space-y-2">
               <figure><img className="rounded-full w-32" src={info.image} /></figure>
               <div className="card-body">
                 <h2 className="font-bold text-2xl text-center">{info.name}</h2>
                 <p className="text-center font-semibold text-xl">Country: {info.country}</p>
                 <div className="flex justify-between items-center gap-2">
                   <p className="text-center font-semibold">Salary: {info.salary}</p>
                   <p className="text-center font-semibold">Role: {info.role}</p>
                 </div>
                 
                 <div className="card-actions justify-center">
                   <button onClick={() =>handleSelectedActors(info)} className="btn rounded-full">Add</button>
                 </div>
               </div>
             </div>
           )
           )
             
       }
          
       </div>
       <div>
      <Cart SelectActor={SelectActor} TotalSalary={TotalSalary} RemainingCount={RemainingCount}></Cart>
       </div>
          </div>
          </>
        
    );
};

export default Main;