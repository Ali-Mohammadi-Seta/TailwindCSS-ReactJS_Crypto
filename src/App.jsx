import React, {useState, useEffect} from "react";
import SearchBar from "./Components/SearchBar.jsx";
import axios from "axios";
import Coins from './Components/Coins.jsx'
import { GoArrowRight , GoArrowLeft } from "react-icons/go";



function App() {
    // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&"

    const [coins, setCoins] = useState([])
    const [searchCoin, setSearchCoin] = useState("")
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axios.get(`${url}per_page=50&page=1&sparkline=false`).then((response) => {
            setCoins(response.data)
            // console.log(response.data[0])
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         axios.get(`${url}per_page=50&page=1&sparkline=false`)
    //             .then(res => setCoins(res.data))
    //             .catch(err => console.error(err));
    //     }, 10000); //repeat every 10 seconds
    //
    //     return () => clearInterval(interval);
    // }, []);



    const filteredCoin = coins.filter(coin=> coin.id.toLowerCase().includes(searchCoin.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchCoin.toLowerCase()))


    useEffect(() => {
        axios.get(url).then(res=>setCurrentPage(res.data))
        .catch(error=>console.log(error))
    }, [currentPage]);





    const handleNextPage = () => {
        axios.get(`${url}per_page=50&page=${currentPage + 1}&sparkline=false`)
            .then((response) => {
                setCoins(response.data);
                setCurrentPage(currentPage + 1);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            axios.get(`${url}per_page=50&page=${currentPage - 1}&sparkline=false`)
                .then((response) => {
                    setCoins(response.data);
                    setCurrentPage(currentPage - 1);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };






    return (
        <div>
            <SearchBar searchCoin={searchCoin} setSearchCoin={setSearchCoin}/>
            <Coins coins={filteredCoin}/>
            <div className='pt-10 pb-10 flex items-center'>
                <button className="btn mx-auto" onClick={handlePrevPage}><GoArrowLeft size={30}/> Previous Page </button>
                <button className="btn mx-auto" onClick={handleNextPage}>Next Page <GoArrowRight size={30}/></button>
            </div>

        </div>

    )
}

export default App
