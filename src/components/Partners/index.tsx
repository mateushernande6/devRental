import {
  OuterContainer,
  Container,
  UpperContainer,
  CompanyImage,
} from "./style";
import Carousel from "react-elastic-carousel";

const Partners = () => {
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
            itemsToShow={4}
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
