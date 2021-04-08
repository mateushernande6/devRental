import {Container, UpperContainer, LowerContainer} from './style'
import Button from "../Atoms/Button";

const HomeHeader = () => {
    return (
    <Container>
        <UpperContainer>

            <img src={'./assets/devrental.svg'} alt={''}/>

            <div>
                <Button height={4.5} width={15} color={'var(--text)'} text={'Login'} background={'var(--color-primary)'} click={()=> null}/>
                <Button height={4.5} width={15} color={'var(--text)'} text={'Register'} background={'var(--color-secondary)'} click={()=> null}/>
            </div>
        </UpperContainer>

        <LowerContainer>

            <img src={'./assets/hometwo.svg'}/>

            <p>Uma empresa sempre está atrás de pessoas qualificadas, mostre a ela que você existe</p>

        </LowerContainer>
    </Container>
        );
};

export default HomeHeader;