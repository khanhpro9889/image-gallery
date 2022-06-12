import { useState, useEffect } from "react";
import useImages from "./hooks/useImages";
import ImageGallery from './components/ImageGallery';
import Loading from './components/Loading';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight, faXmark)

function App() {
  const { getImages, isLoading, isError } = useImages();
  const [imagesList, setImagesList] = useState([]);
  const getImagesApi = async () => {
    const data = await getImages();
    if (isError) {
      return;
    }
    setImagesList(data);
  }

  useEffect(() => {
    getImagesApi();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      {isLoading ? <Loading /> : <ImageGallery imagesList={imagesList}/>}
    </div>
  );
}

export default App;
