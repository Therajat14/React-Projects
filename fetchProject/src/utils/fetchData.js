export const fetchData = async (API_URL) => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        return data;

    }

    catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }


};