import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
            <div className='mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
             <h1 className='text-black font-body'>Thank you for shopping with us! </h1>
             <p className='text-black font-body'>Your order #45863</p>
             <p className='text-black font-body'>We will email you an order confirmation with details and tracking info</p>
             <div className="my-10 flex items-center justify-center font-body rounded-lg border border-transparent bg-grey px-6 py-3 text-base font-light text-white shadow-sm">
                 <p>
                     <button type="button">
                         <Link to="/products" className='font-medium ml-1 hover:text-indigo-500'>Continue Shopping</Link>
                     </button>
                 </p>
             </div>
         </div>
    );
};

export default CheckOut;