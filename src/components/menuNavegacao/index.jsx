import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { Container, Title1, Categoria, Carrinho, LinkCategoria} from "./styled"

function NavMenu() {
    return (
        <Container>
            <Link to={"/"}> <Title1> LancheFeliz </Title1></Link>
            <Categoria>
                <LinkCategoria to={"/assados"}> Assados </LinkCategoria>
                <LinkCategoria to={"/bebidas"}> Bebidas </LinkCategoria>
                <LinkCategoria to={"/pizzas"}> Pizzas </LinkCategoria>
                <LinkCategoria to={"/saldados"}> Salgados </LinkCategoria>
            </Categoria>
            <Link to={"/usuario"}>
                <Carrinho>
                    <FaShoppingCart className="carrinho" />
                </Carrinho>
            </Link>
        </Container>
    );
}

export default NavMenu;