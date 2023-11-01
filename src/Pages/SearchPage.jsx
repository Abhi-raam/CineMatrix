import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfinitySpin } from "react-loader-spinner";
import axios from '../Axios';
import { apiKey } from '../Constants/Const';
import RowCard from '../Components/RowCard';
function SearchPage() {
    const { query } = useParams()
    const [searchData, setSearchData] = useState()
    const [page, setPage] = useState(1)
    // console.log("the entered value is " + query);
    const url = `/search/multi?query=${query}&page=${page}&api_key=${apiKey}`
    async function initialCall() {
        console.log("first call worked");
        await axios.get(url).then((response) => {
            // console.log(response.data);
            // console.log(page);
            setSearchData(response.data)
            setPage((prev) => prev + 1);
            console.log(page);
        })
    }
    async function secondCall() {
        console.log("second call worked");
        await axios.get(url).then((response) => {
            // console.log(response.data);
            // console.log(page);
            if (searchData?.results) {
                setData({...searchData,results: [...searchData.results, ...response.results],});
              } else {
                setData(response);
              }
              setPage((prev) => prev + 1);
            })
    }
    useEffect(() => {
        // axios.get(`/search/multi?query=${query}&page=${page}&api_key=${apiKey}`).then((response) => {
        //     console.log(response.data);
        //     console.log(page);
        //     setSearchData(response.data.results)
        //     setPage(prevPage => prevPage + 1)
        //     console.log(page);
        // })
        setPage(1)
        initialCall()
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [query])
    return (
        <div className='pt-20 px-5'>
            <div>
                <h1 className='text-slate-200 text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Search result of <span className='text-[#C3073F]'>{query}</span></h1>
            </div>
            <div>
                <InfiniteScroll
                    dataLength={searchData?.results?.length || []}
                    hasMore={page <= searchData?.total_pages}
                    next={secondCall}
                    loader={
                        <div className='flex justify-center'>
                            <InfinitySpin
                            width='250'
                            color="#C3073F" />
                        </div>
                    }>
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {searchData?.results.map((item, index) => {
                            if (item?.media_type === "person") return;
                            return <RowCard key={index} movie={item} fromSearch={false} />;
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default SearchPage