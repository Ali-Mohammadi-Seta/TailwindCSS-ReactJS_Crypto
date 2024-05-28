import React from 'react'
import Coins from "./Coins.jsx";

const CoinsItem = (props) => {
    return (
        <div className='flex justify-between mx-auto h-auto max-w-[1640px] lg:hover:scale-105  duration-300  border rounded-full p-7 mb-4 dark:bg-gray-900 bg-gray-100'>
            <p className='ml-3'>{props.coins.market_cap_rank}</p>

            <div className='flex sm:max-w-[100px]'>
                <img src={props.coins.image} alt='/' className='h-[20px] w-[20px] mr-4'/>
                <p className=''>
                    <span className='truncate'>{props.coins.id}</span>
                    <span className="text-right font-bold dark:bg-gray-700 bg-gray-400 m-4 ">{props.coins.symbol}</span>
                </p>
            </div>

            <p>${props.coins.current_price}</p>
            <p className='hidden lg:flex'>{props.coins.price_change_percentage_24h}</p>
            <p className='hidden lg:flex'>${props.coins.total_volume}</p>
            <p className='hidden lg:flex'>${props.coins.market_cap}</p>


        </div>
    )
}
export default CoinsItem
