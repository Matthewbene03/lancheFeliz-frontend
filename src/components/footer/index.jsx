import { Container} from "./styled"
import { useLocation } from "react-router-dom";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

import {Item} from "./styled"

function Footer() {
  const location = useLocation();

  return (
    <Container>
      <Item $pagAtiva={location.pathname === "/"}>
        <GoHome />
        Início
      </Item>

      <Item $pagAtiva={location.pathname === "/pedidos"}>
        <TbAlignBoxLeftStretch />
        Pedidos
      </Item>

      <Item $pagAtiva={location.pathname === "/perfil"}>
        <VscAccount />
        Perfil
      </Item>
    </Container>
  );
}

export default Footer;