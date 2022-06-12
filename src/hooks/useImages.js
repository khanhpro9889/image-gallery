import { useState } from "react"
import axiosClient from '../axios-config';

const BASE_URL = 'https://api.unsplash.com/photos?client_id=';
const API_KEY = '0G3x7xx8QfkFZL4pE7vyzzPjtmECZ6WoN040FlP8w0E';

const useImages = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getImages = async () => {
        setIsLoading(true);
        const result = await axiosClient.get(`${BASE_URL}${API_KEY}`);
        if (result.length && result.length > 0) {
            setIsLoading(false);
            setImages(result);
            return result;
        }
        setIsLoading(false);
        setIsError(true);
        return false;
    }

    return {
        images,
        isError,
        isLoading,
        getImages
    }
}

export default useImages;