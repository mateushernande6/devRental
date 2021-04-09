import {Container, LowerContainer, UpperContainer} from "./style";

import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

const Partners = () => {
    return (
        <Container>

            <UpperContainer>
        <h2>Empresas Parceiras</h2>

        <p>lorem ipsum dolor sit amet </p>

            </UpperContainer>


        <LowerContainer>

        <MdKeyboardArrowLeft size={'10rem'}  />

            <img src={'https://picsum.photos/200'} alt={''}/>
            <img src={'https://picsum.photos/200'} alt={''}/>
            <img src={'https://picsum.photos/200'} alt={''}/>
            <img src={'https://picsum.photos/200'} alt={''}/>

        <MdKeyboardArrowRight size={'10rem'}/>

        </LowerContainer>

        </Container>
    );
};

export default Partners;