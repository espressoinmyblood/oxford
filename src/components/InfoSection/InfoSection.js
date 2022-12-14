import React from 'react';
import parse from 'html-react-parser';
import { Button } from '../Button.Styled';
import { 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Img 
} from './InfoSection.Styled';

const InfoSection = ({ 
    lightBg, 
    id, 
    imgStart, 
    topline, 
    lightText, 
    heading, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, 
    primary,
    dark,
    dark2
}) => {
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart} >
                <Column1>
                <TextWrapper>
                    <TopLine>{topline}</TopLine>
                    <Heading lightText={lightText}>{heading}</Heading>
                    <Subtitle darkText={darkText}>{parse(description)}</Subtitle>
                    <BtnWrap>
                        <Button to="services"
                        smooth={true}
                        duration={2000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1: 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
