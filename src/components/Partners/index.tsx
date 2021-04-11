import {OuterContainer, Container, LowerContainer, UpperContainer, CompanyCard} from "./style";

import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

const Partners = () => {
    return (
       <OuterContainer>
        <Container>

            <UpperContainer>
        <h2>Empresas Parceiras</h2>

        <p>lorem ipsum dolor sit amet </p>

            </UpperContainer>


        <LowerContainer>

        <MdKeyboardArrowLeft size={'7rem'}  />

        {/*<CompanyCard>*/}
        {/*    <img src={'https://picsum.photos/200'} alt={''}/>*/}
        {/*    <h4>Company name</h4>*/}
        {/*</CompanyCard>*/}

        <CompanyCard>
            <img src={'https://picsum.photos/200'} alt={''}/>
            <h4>Company name</h4>
        </CompanyCard>

        <CompanyCard>
            <img src={'https://picsum.photos/200'} alt={''}/>
            <h4>Company name</h4>
        </CompanyCard>

        <CompanyCard>
            <img src={'https://picsum.photos/200'} alt={''}/>
            <h4>Company name</h4>
        </CompanyCard>

        <MdKeyboardArrowRight size={'7rem'}/>

        </LowerContainer>

        </Container>
       </OuterContainer>
    );
};

export default Partners;