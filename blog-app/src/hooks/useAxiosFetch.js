import axios from "axios";
import { response } from "express";
import { useEffect, useState } from "react";

const useAxiosFeth = (url) => {

    const [data, setData] = useState([]);
    const [fethError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            isLoading(true);

            try {
                response = await axios.get(url, {
                    cancelToken: source.token
                });
            } catch (err) {
                if (isMounted)
                    setFetchError(err.message);
                setData([]);

            } finally {
                isMounted && setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }

            if (isMounted) {
                setData(response.data);
                setFetchError(null);
            }

        }
        fetchData();
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
            console.log("Inside Clean-Up function")
        }
        return cleanUp;
    },
        [url]);

    return { data, fethError, isLoading };
}

export default useAxiosFeth;