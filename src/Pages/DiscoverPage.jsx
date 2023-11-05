import React, { useEffect, useState } from 'react'
import axios from '../Axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfinitySpin } from "react-loader-spinner";
import { apiKey } from '../Constants/Const';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom'
import RowCard from '../Components/RowCard';
function DiscoverPage() {
    const { pathname } = useLocation();
    const { type } = useParams();
    const [page, setPage] = useState(1);
    const [discover, setDiscover] = useState({ results: [], total_pages: 0 });
    const url = `/discover/${type}?&page=${page}&api_key=${apiKey}`;
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
            setDiscover(data);
            setPage(page + 1);
        }
    }

    async function secondCall() {
        const data = await fetchData(url);
        if (data) {
            setDiscover(prevData => ({
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

    }, [type])
    return (
        <div className='pt-20 px-5'>
            <div className=''>
                <h1 className='text-slate-200 text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Discover <span className='text-[#C3073F]'>{type}</span></h1>
            </div>
            <div>
                <InfiniteScroll
                    dataLength={discover.results.length}
                    hasMore={page <= discover?.total_pages}
                    next={secondCall}
                    loader={
                        <div className='flex justify-center'>
                            <InfinitySpin
                                width='250'
                                color="#C3073F" />
                        </div>}>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
                        {discover.results.map((item, index) => {
                            if (item?.media_type === "person") return null;
                            return <RowCard key={index} movie={item} type={type} fromSearch={false} discover={true} />;
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default DiscoverPage