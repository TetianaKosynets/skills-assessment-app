import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";

export default function DataComponent() {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch("http://universities.hipolabs.com/search?country=Australia");
        setData(await response.json());
    }

    useEffect(() => {
        fetchData();
    }, []);

   
    return (
        <SearchComponent data={ data } />
            )
    }