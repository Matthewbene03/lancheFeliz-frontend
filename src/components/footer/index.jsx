import { Container } from "./styled"
import { useLocation } from "react-router-dom";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

import { LinkItem } from "./styled"

function Footer() {
  const location = useLocation();

  return (
    <Container>

      <LinkItem to={"/"} $pagAtiva={location.pathname === "/"}>
          <GoHome />
          Início
      </LinkItem>

      <LinkItem to={"/pedidos"} $pagAtiva={location.pathname === "/pedidos"}>
        <TbAlignBoxLeftStretch />
        Pedidos
      </LinkItem>

      <LinkItem to={"/perfil"} $pagAtiva={location.pathname === "/perfil"}>
        <VscAccount />
        Perfil
      </LinkItem>
    </Container >
  );
}

export default Footer;