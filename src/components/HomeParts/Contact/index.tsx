import {Footer, UpperContainer, Icons, InfoSection} from './style'
import {OuterContainer, Container} from "../style";

import {IoLogoFacebook, IoMdMail, IoLogoInstagram} from 'react-icons/io'


const Contact = () => {
    return (
<OuterContainer>
        <Container>
    <UpperContainer>
        <InfoSection>
            <img src={'./assets/logoHome.svg'} alt={''}/>

            <Icons>
                <IoLogoFacebook size={30} color={'#fff'}  />
                <IoLogoInstagram size={30} color={'#fff'}/>
                <IoMdMail size={30} color={'#fff'}/>
            </Icons>
        </InfoSection>

        <InfoSection>
            <nav>
                <h3>Sobre</h3>
                <ul>
                    <li>Propósito</li>
                    <li>Depoimentos</li>
                    <li>Empresas parceiras</li>
                </ul>
            </nav>
        </InfoSection>

        <InfoSection>
            <h3>Contato</h3>
            <p>R. General Mário Tourinho, nr 0</p>
        </InfoSection>
            </UpperContainer>

        </Container>

    <Footer>
        <h6>desenvolvido na kenzie academy brasil</h6>
    </Footer>
</OuterContainer>
    );
};

export default Contact;