import React, { useState } from 'react';
import { Button } from '../Button.Styled';
import Video from '../../videos/video.mp4';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './Hero.Styled';


const Hero = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>
            TEACH + CONNECT + LEARN
          </HeroH1>
          <HeroP>
          Improving the quality of education and the level of English language in non-English speaking
countries by offering free education, training and development
          </HeroP>
          <HeroBtnWrapper>
            <Button 
              to="about" 
              smooth={true} 
              spy={true}
              duration={1000}
              offset={-80} 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Learn More {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
