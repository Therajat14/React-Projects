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

        const cleanUp = () => {
            console.log("This is called inside cleanUP function");
            window.removeEventListener('resize', handelResize);
        }

        return cleanUp;
    },
        []);

    return WindowSize;
}
export default useWindowSize;