import { useContext } from "react";
import VideoContext from "../Context/VideoContext";
/** Custom hooks made by normally hooks  */


//useContext hook can only call inside function component 
//for that hum ek function ke andar rakhenge isse
function useVideos(){
    return useContext(VideoContext);
}

export default useVideos;