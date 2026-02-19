import { Container, Title1, Categoria, Usuario} from "./styled"
import { Link } from "react-router-dom";

function NavMenu() {
    return (
        <Container>
            <Link to={"/"}> <Title1> LancheFeliz </Title1></Link>
            <Categoria>
                <Link to={"/assados"}> Assados </Link>
                <Link to={"/bebidas"}> Bebidas </Link>
                <Link to={"/pizzas"}> Pizzas </Link>
                <Link to={"/saldados"}> Salgados </Link>
            </Categoria>
            <Link to={"/usuario"}> <Usuario> </Usuario></Link>
        </Container>
    );
}

export default NavMenu;