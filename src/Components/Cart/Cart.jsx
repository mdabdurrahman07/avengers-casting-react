/* eslint-disable react/prop-types */


const Cart = ({SelectActor , RemainingCount, TotalSalary}) => {

    return (
      
        <div className=" bg-slate-200">
            <h1 className='text-5xl font-bold bg-slate-200 text-gray-600 text-center p-2'>Welcome to Cart</h1>
            <h1 className='text-2xl font-bold bg-slate-200 text-gray-600 text-center p-2'>Total Coast: {TotalSalary}</h1>
            <h1 className='text-2xl font-bold bg-slate-200 text-gray-600 text-center p-2'>Remaining Coast: {RemainingCount}</h1>
            {
            SelectActor.map((actorName , idx) => (
                <p key={idx} className="text-2xl font-medium text-center my-1">{actorName.name}</p>
            ))
           }
        </div>
        
         
        
      
    );
};

export default Cart;