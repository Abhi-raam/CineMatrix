import React,{useEffect} from 'react'
import Home from '../Components/Home'
import Row from '../Components/Row'
import { title } from '../Constants/Const'
import { useLocation } from "react-router-dom";

function HomePage() {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 2, behavior: "smooth" });
  }, [pathname]);
    return (
        <div className='pb-8'>
            <Home />
            <Row name={"Upcoming"} movieurl={title.upcoming} />
            <Row name={"Now Playing"} movieurl={title.nowplaying} />
            <Row name={"Trending"} movieurl={title.trending} />
            <Row name={"Popular"} movieurl={title.popular} />
            <Row name={"Top Rated"} movieurl={title.toprated} />
        </div>
    )
}

export default HomePage