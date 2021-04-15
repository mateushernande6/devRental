import {
  UpperContainer,
  CompanyImage,
} from "./style";
import {OuterContainer, Container} from "../style";

import Carousel from "react-elastic-carousel";
import {useEffect, useState} from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])

  useEffect(()=>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener('resize', handleResize)

    return()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return size
}

const Partners = () => {
  const [height ,width] = useWindowSize()

  // let itemsToShow = 0

  const handleCarousel = () => {
    if (width < 321){
      return 1
    }

    else if(width >= 321 && width < 426){
        return 2
    }
    else if(width >= 426 && width < 769){
      return 3
    }
    return 4
  }


  return (
    <OuterContainer>
      <Container>
        <UpperContainer>
          <h2>Empresas Parceiras</h2>

          <p>lorem ipsum dolor sit amet </p>
        </UpperContainer>
        <>
          <Carousel
            enableAutoPlay={true}
            autoPlaySpeed={3000}
            isRTL
            itemsToShow={handleCarousel()}
            transitionMs={1000}
            tiltEasing="ease"
            enableTilt
          >
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
            <CompanyImage src="https://picsum.photos/200/200" />
          </Carousel>
        </>
      </Container>
    </OuterContainer>
  );
};

export default Partners;
