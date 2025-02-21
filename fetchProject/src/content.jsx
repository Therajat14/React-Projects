import { useState, useEffect } from "react";
import { fetchData } from "./utils/fetchData";
import Tabel from "./table/table";
const Content = ({ buttonState }) => {

    const API_URL = `https://jsonplaceholder.typicode.com/${buttonState}`;
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData(API_URL);
            setData(result);
        };
        getData();


    }, [buttonState]);
    // console.log(data);
    // data.forEach(data => {
    //     Object.entries(data).forEach(([key, value]) => {
    //         console.log(`${key}: ${value}`);
    //     });



    return (
        <div className="content">
            {/* <ul>
                {data ? (
                    data.map((item, index) => <li key={index}>{JSON.stringify(item)}</li>)
                ) : (
                    <p>Loading...</p>
                )}
            </ul>

            <table>

            </table> */}

            <Tabel data={data} />



        </div>
    );
};

export default Content;
