import styled, { keyframes } from "styled-components";
import logo from "../../../images/logo.png";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

// Define keyframes animation outside of the component
const bn13bouncy = keyframes`
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
`;

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container className="contin">
      <Logo>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </Logo>
      <NavMenu>
        <NavLink href="/" gradient>
          <span>Home</span>
        </NavLink>
        <NavLink href="/vapt">
          <span>VAPT</span>
        </NavLink>
        <Dropdown>
          <DropdownButton>
            <span>Courses</span>
          </DropdownButton>
          <DropdownContent>
            <a href="/In-house">In-house</a>
            <a href="/collab">Collab</a>
            <a href="/udemy">Udemy</a>
          </DropdownContent>
        </Dropdown>
        <NavLink href="/other">
          <span>Other Services</span>
        </NavLink>
      </NavMenu>
      <StyledLogin href="/login" onClick={handleLogin}>
        Login
      </StyledLogin>
      <DropdownMenu />
    </Container>
  );
};

//Styled-Components

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  color: white;
  background-color: black;
  margin-bottom: 0px
  position

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.div`
  flex: 0 0 auto;
  width: 120px;
  height: 100%;

  a {
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

const NavLink = styled.a`
  color: ${({ gradient }) => (gradient ? "white" : "white")};
  margin: 0  20px;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: ${({ gradient }) =>
    gradient
      ? "linear-gradient(90deg, rgba(230, 1, 143, 1) 0%, rgba(2, 0, 252, 1) 50%)"
      : "transparent"};

  &:hover {
    background-color: ${({ gradient }) =>
      gradient ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-10px);
    text-decoration: underline;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const Dropdown = styled.div`

`;

const DropdownButton = styled.button`
  color: ${({ gradient }) => (gradient ? "white" : "white")};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  min-width: 150px;
  z-index: 2; /* Ensure a higher z-index */
  display: none;
  border-radius: 5px;

  ${Dropdown}:hover & {
    display: block;
  }

  a {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const StyledLogin = styled.a`
  display: inline-block;
  padding: 0.2em 1.1em;
  border: 1px solid transparent; /* Set border to transparent */
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  position: relative;
  margin-left: 10px; /* Adjust margin-left as needed */
  animation: ${bn13bouncy} 5s infinite linear;

  /* Use border-image for gradient border */
  border-image: linear-gradient(90deg, rgba(230, 1, 143, 1) 0%, rgba(2, 0, 252, 1) 50%);
  border-image-slice: 1;
  &:hover {
    background-color: white;
    color: #000000;
  }
`;

export default Header;
