import {Container, Footer, UpperContainer, Icons, InfoSection} from './style'

import {IoLogoFacebook, IoMdMail, IoLogoInstagram} from 'react-icons/io'


const Contact = () => {
    return (
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

            <Footer>
            <h6>desenvolvido por um bando de gente no 220</h6>
            </Footer>

        </Container>
    );
};

export default Contact;