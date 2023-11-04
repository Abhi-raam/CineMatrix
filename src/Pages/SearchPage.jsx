import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfinitySpin } from "react-loader-spinner";
import axios from '../Axios';
import { apiKey } from '../Constants/Const';
import RowCard from '../Components/RowCard';
function SearchPage() {
    const { query } = useParams();
    const [searchData, setSearchData] = useState({ results: [], total_pages: 0 });
    const [page, setPage] = useState(1);

    const url = `/search/multi?query=${query}&page=${page}&api_key=${apiKey}`;

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async function initialCall() {
        const data = await fetchData(url);
        if (data) {
            setSearchData(data);
            setPage(page + 1);
        }
    }

    async function secondCall() {
        const data = await fetchData(url);
        if (data) {
            setSearchData(prevData => ({
                results: [...prevData.results, ...data.results],
                total_pages: data.total_pages
            }));
            setPage(page + 1);
        }
    }

    useEffect(() => {
        setPage(1);
        initialCall();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [query]);

    return (
        <div className='pt-20 px-5'>
            <div>
                <h1 className='text-slate-200 text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Search result of <span className='text-[#C3073F]'>{query}</span></h1>
            </div>
            <div>
                <InfiniteScroll
                    dataLength={searchData.results.length}
                    hasMore={page <= searchData?.total_pages}
                    next={secondCall}
                    loader={
                        <div className='flex justify-center'>
                            <InfinitySpin
                                width='250'
                                color="#C3073F" />
                        </div>}>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {searchData.results.map((item, index) => {
                            if (item?.media_type === "person") return null;
                            return <RowCard key={index} movie={item} fromSearch={false} />;
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default SearchPage;
