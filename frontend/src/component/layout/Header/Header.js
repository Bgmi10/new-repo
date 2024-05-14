import styled from "styled-components";
import logo from "../../../images/logo.png";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const Header = (props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <Container className="contin">
      <Logo>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </Logo>
      <NavMenu>
      &nbsp;
      &nbsp;
      &nbsp;
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/vapt">
          <span>VAPT</span>
        </a>
        <div class="dropdown">
          <button class="dropbtn"><span>Courses</span></button>
          <div class="dropdown-content">
            <a href="/course/cybersecurity">In-house</a>
            <a href="#">Collab</a>
            <a href="#">Udemy</a>
          </div>
        </div>
        <a href="/other">
          <span>Other Services</span>
        </a>
      </NavMenu>
      <Login className="h-login" href="/login">Login</Login>
    </Container>
  );
};

//Styled-Components

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.a`
  width: auto;
  align-items: center;

  a {
    cursor: auto;
    img {
      /* display: flex; */
      width: 90%;
      height: 150px;
      border-radius: 50px;
      margin-top:0;
      /* align-items: center; */
    }
  }
`;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: rgb(249, 249, 249);
      font-size: 20px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 1px 0;
      white-space: nowrap;
      position: relative;
      font-family: "Inter", sans-serif;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 548px) {
    display: none;
  }
`;

const Login = styled.a`
  color: #ffffff;
`;

export default Header;