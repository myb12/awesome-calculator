import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ResultContext = createContext();
const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [calculations, setCalculations] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/results')
            .then(res => {
                if (res) {
                    const data = res.data?.reverse();
                    setResults(data);
                }
            })
    }, []);

    return (
        <ResultContext.Provider value={{ results, setResults, calculations, setCalculations }}>
            {children}
        </ResultContext.Provider>
    );
};

export default ResultProvider;