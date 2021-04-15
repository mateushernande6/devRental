import { UpperContainer, LowerContainer} from './style'
import {OuterContainer, Container} from "../style";

import Button from "../../Atoms/Button";
import {useHistory} from 'react-router-dom'

const HomeHeader = () => {
    const history = useHistory()

    return (
<OuterContainer>
    <Container>
        <UpperContainer>

            <img src={'./assets/logoHome1.svg'} alt={''}/>

            <div>
                <Button height={4.5} width={15} color={'var(--text)'} text={'Login'} background={'var(--color-primary)'} click={()=> history.push('/login')}/>
                <Button height={4.5} width={15} color={'var(--text)'} text={'Register'} background={'var(--color-secondary)'} click={()=> history.push('/preregister')}/>
            </div>
        </UpperContainer>

        <LowerContainer>

            <img src={'./assets/hometwo.svg'}/>

            <p>Uma empresa sempre está atrás de pessoas qualificadas, mostre a ela que você existe!</p>

        </LowerContainer>
    </Container>
</OuterContainer>
        );
};

export default HomeHeader;