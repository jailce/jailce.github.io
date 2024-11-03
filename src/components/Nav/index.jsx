// src/components/Nav/index.js
import { HeaderLinks, Container  } from './styles';

const Nav = () => {
    return (
        <>
        <Container>
            <HeaderLinks>
                <a href="#cadastro">Cadastro</a>
                <a href="#login">Login</a>
            </HeaderLinks>
            </Container>
        </>
    );
}

export default Nav;
