import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDatas(data);
            } catch (err) {
                console.log('fetching error :', err);
                setError('Data can\'t be fetched :' + err );
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
        fetchData();
        }, 200);

    }, [url]);

    return [datas, isLoading, error];
}
