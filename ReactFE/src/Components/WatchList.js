import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";




const WatchList = ()=>{
    const movie = useSelector((state) => state.watchList);
    const dispatch = useDispatch();

    useEffect(() => {
      
    },[dispatch])


    return (
        <>
        <NavBar />
        
        </>
    )
}
export default WatchList;