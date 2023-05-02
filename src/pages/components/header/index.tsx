import {
  Container,
  Content,
  LeftPart,
  WrapperLeftIcon,
  RightPart,
  WrapperRightIcon,
  IconMenu,
} from "./styles";
import perfilImg from "@/assets/perfil.png";
import battleImg from "@/assets/battle.png";
import logoutImg from "@/assets/logout.png";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <Content>
        <LeftPart>
          <WrapperLeftIcon>
            <IconMenu
              src={perfilImg}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              quality={100}
              priority
              alt=""
            />
            <IconMenu
              src={battleImg}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              quality={100}
              priority
              alt=""
            />
          </WrapperLeftIcon>
        </LeftPart>
        <RightPart>
          <WrapperRightIcon>
            <IconMenu
              src={logoutImg}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              quality={100}
              priority
              alt="logout"
              onClick={signOut}
            />
          </WrapperRightIcon>
        </RightPart>
      </Content>
    </Container>
  );
}
