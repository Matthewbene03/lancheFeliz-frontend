import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { Container, Title1, Categoria, Carrinho, LinkCategoria } from "./styled"
import { useSelector } from "react-redux";
import * as TiposUsuarios from "../../config/TiposUsuarios"

function NavMenu() {
    const { user } = useSelector(state => state.authorization)
    
    return (
        <Container>
            {(user.tipo === TiposUsuarios.Caixa || user.tipo === TiposUsuarios.Cozinha || user.tipo === TiposUsuarios.Gerente) ? (
                <>
                    <Link to={"/"}> <Title1> LancheFeliz </Title1></Link>
                    <Categoria>
                        <LinkCategoria to={"/assados"}> Assados </LinkCategoria>
                        <LinkCategoria to={"/bebidas"}> Bebidas </LinkCategoria>
                        <LinkCategoria to={"/pizzas"}> Pizzas </LinkCategoria>
                        <LinkCategoria to={"/saldados"}> Salgados </LinkCategoria>
                    </Categoria>
                </>
            ) : (
                <>
                    <Link to={"/"}> <Title1> LancheFeliz </Title1></Link>
                    <Categoria>
                        <LinkCategoria to={"/assados"}> Assados </LinkCategoria>
                        <LinkCategoria to={"/bebidas"}> Bebidas </LinkCategoria>
                        <LinkCategoria to={"/pizzas"}> Pizzas </LinkCategoria>
                        <LinkCategoria to={"/saldados"}> Salgados </LinkCategoria>
                    </Categoria>
                    <Link to={"/carrinho-itens"}>
                        <Carrinho>
                            <FaShoppingCart className="carrinho" />
                        </Carrinho>
                    </Link>
                </>
            )}
        </Container>
    );
}

export default NavMenu;