import React, { useEffect, useState, useCallback } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import TCLlogo from '../../images/TCLsq.svg';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink,
  Img
} from './Navbar.Styled';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const linksList = ['about', 'discover', 'services', 'projects', 'team']

  const changeNav = useCallback(() => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
      return;
    }
      setScrollNav(false)
  }, [setScrollNav]);

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [changeNav]);

  const scrollOnTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={scrollOnTop} >
                  <Img src={TCLlogo} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  {linksList.map(link => {
                    return (
                    <NavItem key={link}>
                      <NavLinks
                        to={link}
                        smooth={true} 
                        duration={1000} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                      >
                        <p>{link}</p>
                      </NavLinks>
                    </NavItem>
                    )
                  })}
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/supportus">Support Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar
