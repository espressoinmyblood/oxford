import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './Sidebar.Styled';

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            <SidebarLink to="team" onClick={toggle}>Team</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/supportus">Support Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;
