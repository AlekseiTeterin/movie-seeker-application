import { useState, useEffect } from 'react';

export default function useDebounce(value) {
    const [data, setData] = useState(value)
    useEffect(() => {
        const debounce = setTimeout(() => setData(value), 700);
        return () => clearTimeout(debounce);
    }, [value])

    return data;
}