import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FaFacebook, 
    FaLinkedin, 
    FaYoutube, 
    FaInstagram, 
    FaTwitter 
} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink 
} from './Footer.Styled';

const Footer = () => {
    const scrollOnTop = () => {
        scroll.scrollToTop();
    };    
    
    return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/supportUs">How It Works</FooterLink>
                            <FooterLink to="/supportUs">Testimonials</FooterLink>
                            <FooterLink to="/supportUs">Careers</FooterLink>
                            <FooterLink to="/supportUs">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/supportUs">Contact</FooterLink>
                            <FooterLink to="/supportUs">Support</FooterLink>
                            <FooterLink to="/supportUs">Sponsorship</FooterLink>
                            <FooterLink to="/supportUs">Our Centers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Media</FooterLinkTitle>
                            <FooterLink to="/supportUs">News</FooterLink>
                            <FooterLink to="/supportUs">Press</FooterLink>
                            <FooterLink to="/supportUs">Blog</FooterLink>
                            <FooterLink to="/supportUs">Influencers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to='/' onClick={scrollOnTop}>TCL</SocialLogo>
                    <WebsiteRights>© {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink 
                          href="//www.facebook.com/teach.connect.learn/?ref=bookmarks" 
                          target="_blank" 
                          aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink 
                          href="/" 
                          target="_blank" 
                          aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink 
                          href="/" 
                          target="_blank" 
                          aria-label="Youtube"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink 
                          href="/" 
                          target="_blank" 
                          aria-label="Twitter"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink 
                          href="/" 
                          target="_blank" 
                          aria-label="Linkedin"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
