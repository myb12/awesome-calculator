import { useContext } from "react"
import { ResultContext } from "../context/ResultProvider";

const useResults = () => {
    return useContext(ResultContext);
}

export default useResults;