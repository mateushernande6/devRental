import { Container, InnerContainer, SvgContainer, InfoContainer } from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";

const Register = () => {
  return <Container>
    <InnerContainer>

     <InfoContainer>

     <h2>Cadastrar</h2>

    <Input  height={3.5} placeHolder={'Email'} width={30}/>
    <Input  height={3.5} placeHolder={'Senha'} width={30}/>

    <Button height={5} width={32} color={'#fff'} text={'Register'} background={'#fc923f'} click={() => console.log('oi')} />
    <Button height={4} width={20} color={'#fff'} text={'Login'} background={'#14142b'} click={() => console.log('oi')}/>

     </InfoContainer>
    <SvgContainer>
      <img src='./assets/registerImage.svg' alt={''}/>
    </SvgContainer>


    </InnerContainer>

  </Container>;
};

export default Register;
