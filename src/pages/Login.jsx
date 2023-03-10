import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url(https://images.pexels.com/photos/6770026/pexels-photo-6770026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px ;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 8px;
 
`

const Link = styled.div`
  margin: 5px 0px;
  font-size: 12px; 
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Entrar</Title>
        <Form>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>
            <Button>ENTRAR</Button>
            <Link>Esqueceu sua senha?</Link>
            <Link>Não tem uma conta? Cadastra-se</Link>   
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
