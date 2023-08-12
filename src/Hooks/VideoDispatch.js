import { useContext } from "react";
import VideoDispatchContext from '../Context/VideoDispatchContext'

/** Custom hooks made by normally hooks  */


//useContext hook can only call inside function component 
//for that hum ek function ke andar rakhenge isse
function useVideoDispatch(){
    return useContext(VideoDispatchContext);
}

export default useVideoDispatch;