import { Container } from "./styled"
import { useLocation } from "react-router-dom";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";
import { FaTasks } from "react-icons/fa";

import { LinkItem } from "./styled"
import * as TiposUsuarios from "../../config/TiposUsuarios"

function Footer() {
  const location = useLocation();
  const { user } = useSelector(state => state.authorization)
  console.log(user)

  return (
    <Container>

      <LinkItem to={"/"} $pagAtiva={location.pathname === "/"}>
        <GoHome />
        Início
      </LinkItem>

      {user.tipo === TiposUsuarios.Gerente ? (
        <LinkItem to={"/acoes"} $pagAtiva={location.pathname === "/pedidos"}>
          <FaTasks />
          Ações
        </LinkItem>
      ) : (
        <LinkItem to={"/pedidos"} $pagAtiva={location.pathname === "/pedidos"}>
          <TbAlignBoxLeftStretch />
          Pedidos
        </LinkItem>
      )}

      <LinkItem to={"/perfil"} $pagAtiva={location.pathname === "/perfil"}>
        <VscAccount />
        Perfil
      </LinkItem>
    </Container >
  );
}

export default Footer;