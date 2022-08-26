import React from 'react';
import Icon1 from '../../images//certificate.svg';
import Icon2 from '../../images/world.svg';
import Icon3 from '../../images/hero.svg';
import Icon4 from '../../images/digital.svg';
import Icon5 from '../../images/hobby.svg';
import Icon6 from '../../images/workspace.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './Services.Styled';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>What We Do</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Teacher Training</ServicesH2>
                <ServicesP>Improving teacher quality to improve the educational outcomes of children.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>English ESOL Training</ServicesH2>
                <ServicesP>Improving the level of English language for Speakers of Other Languages.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Leadership Training</ServicesH2>
                <ServicesP>Creating better education leaders for a better future.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Digital Literacy Training</ServicesH2>
                <ServicesP>We are improving the level of digital literacy by providing training and access to technology.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Hobby Clubs</ServicesH2>
                <ServicesP>After-school hobby and homework clubs for school children.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Community Learning Centers</ServicesH2>
                <ServicesP>Providing modern and free-to-use multifunctional spaces to improve the level and quality of education and leisure.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
