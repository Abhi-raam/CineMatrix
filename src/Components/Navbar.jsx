import React, { useState } from 'react'
// import { Link } from 'react-scroll';
import { BsSearch } from "react-icons/bs";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [mobileToggle, setMobiletoggle] = useState(false)
    const [search, setSearch] = useState()
    const buttonClick = () => {
        setMobiletoggle(!mobileToggle)
    }
    function enterClick(event){
        if(event.key === "Enter" && search?.length>0){
            navigate(`/search/${search}`);
            setSearch("")
        }
    }
    function searchBtn() {
        navigate(`/search/${search}`);
        setSearch("")
    }
    return (
        <div className='fixed top-0 left-0 right-0 z-50 '>
            <div className="navbar flex justify-between bg-black p-3 ">
                <div className="flex ">
                    <a className="btn btn-ghost normal-case text-xl md:text-3xl font-bold text-[#C3073F]">Cinematrix</a>
                </div>
                <div className='relative flex items-center' >
                    <input className='rounded-full bg-white w-36 md:w-96 px-3 p-1 border-2 border-[#c3073f] outline-none' placeholder='Search ...' type="search" value={search} name="" id="" onChange={((e)=>{setSearch(e.target.value)})} onKeyUp={enterClick} />
                    <div className="absolute right-3">
                        <BsSearch className='cursor-pointer' onClick={searchBtn} />
                    </div>
                </div>
                <div>
                    <ul className="flex  space-x-6 pr-4  font-semibold">
                        <li className='lg:inline-block hidden cursor-pointer text-slate-200 hover:text-[#c3073f]  transition delay-75 duration-150 ease-in-out'>
                            {/* <Link to={/} >Home</Link> */}
                            <Link to={"/"} >Home</Link>
                            {/* <a href="">Home</a> */}
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer text-slate-200 hover:text-[#c3073f] transition delay-75 duration-150 ease-in-out">
                            {/* <Link to={"/explore/movie"}>Movies</Link> */}
                            <a href="">Movies</a>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer text-slate-200 hover:text-[#c3073f]  transition delay-75 duration-150 ease-in-out">
                            {/* <Link to="project" smooth={true} duration={500}>Projects</Link> */}
                            <a href="">TV Shows</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-none  lg:hidden">
                    <button className="btn btn-square btn-ghost text-[#c3073f] " onClick={buttonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>

            {/* mobile view */}
            {mobileToggle && (
                <div className="relative">
                    <div className='grid bg-black justify-end font-semibold absolute top-0 left-0 right-0'>
                        <ul className="mr-3 space-y-2" >
                            <li className='hover:text-[#c3073f] text-slate-200 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="home" smooth={true} duration={500}>Home</Link> */}
                                <Link to={"/"} >Home</Link>
                            </li>
                            <li className='hover:text-[#c3073f] text-slate-200 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="about" smooth={true} duration={500}>About Me</Link> */}
                                <a href="">Movies</a>
                            </li>
                            <li className='hover:text-[#c3073f] text-slate-200 transition delay-75 duration-150 ease-in-out'>
                                {/* <Link to="knowledge" smooth={true} duration={500}>Knowledge</Link> */}
                                <a href="">TV Shows</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar