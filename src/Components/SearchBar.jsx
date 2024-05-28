import React from 'react'


const SearchBar = ({searchCoin , setSearchCoin }) => {
    return (
        <div className=' items-center max-w-[1240px] mx-auto'>

            <div>
                <h1 className=" text-center font-bold text-4xl pt-20 pb-10">Crypto Tracker</h1>
            </div>


            <div className=" flex items-center justify-center mx-auto px-2 ">
                <label className="input input-bordered flex items-center gap-2 hover:outline">
                    <input type="text"
                           className="grow"
                           placeholder="Search"
                           value={searchCoin}
                           onChange={(e) => setSearchCoin(e.target.value)}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fill-rule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clip-rule="evenodd"/>
                    </svg>
                </label>
            </div>

        </div>
    )
}
export default SearchBar
