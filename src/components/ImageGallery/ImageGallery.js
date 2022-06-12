import { useState } from 'react'
import { Flex, Box, BoxImg } from './styles';
import ImageView from './ImageView';

export default function ImageGallery({imagesList}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClickImage = (item, index) => {
    setSelectedIndex(index);
    setSelectedImage(item);
  }

  const handleClickNext = () => {
    setSelectedImage(imagesList[selectedIndex + 1]);
    setSelectedIndex(selectedIndex + 1);
  }

  const handleClickPrevious = () => {
    setSelectedImage(imagesList[selectedIndex - 1]);
    setSelectedIndex(selectedIndex - 1);
  }

  return (
    <>
      {!selectedImage ? <Flex>
        {imagesList.length > 0 && imagesList.map((item, index) => {
          return (
            <>
              <Box key={item.id} onClick={() => handleClickImage(item, index)}>
                <BoxImg>
                  {/* eslint-disable-next-line */}
                  <img src={item.urls.small_s3}/>
                </BoxImg>
              </Box>
            </>
          )
        })}
      </Flex> :
      <ImageView 
        image={selectedImage} 
        index={selectedIndex}
        setSelectedImageNull={()=> setSelectedImage(null)}
        length={imagesList.length}
        next={handleClickNext}
        previous={handleClickPrevious}
      />}
    </>

  )
}
