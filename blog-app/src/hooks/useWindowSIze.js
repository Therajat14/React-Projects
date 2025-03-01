import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [WindowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined

    });

    useEffect(() => {
        const handelResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        handelResize();
        window.addEventListener('resize', handelResize);


        return window.removeEventListener('resize', handelResize);
    },


        []);

    return WindowSize;
}
export default useWindowSize;