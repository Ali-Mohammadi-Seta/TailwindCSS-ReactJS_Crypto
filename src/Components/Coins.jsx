import React from 'react'
import CoinsItem from "./CoinsItem.jsx";

const Coins = (props) => {
    return (
        <div className='mx-auto max-w-[1640px] h-auto pt-20'>
            <div>
                <div className="flex items-center justify-between text-2xl p-10 ">
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p className="hidden lg:flex">24h</p>
                    <p className="hidden md:flex">Volume</p>
                    <p className="hidden lg:flex">Market Cap</p>

                </div>

                {props.coins.map(coins=>{

                    return(
                    <CoinsItem key={coins.id} coins={coins}/>
                    )
                }

                    )}


            </div>




        </div>
    )
}
export default Coins
