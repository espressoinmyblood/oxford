import styled from 'styled-components';

export const ServicesContainer = styled.div`
height: 860px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 971px) {
    height: 1250px;
}

@media screen and (max-width: 655px) {
    height: 2100px;
}
`;

export const ServicesWrapper = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
flex-flow: row wrap;
gap: 16px;
padding: 0 20px;
height: auto;
max-width: 1000px;
`;

export const ServicesCard = styled.div`
width: 300px;
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height: 300px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 280px) {
    width: 240px;
}
`;

export const ServicesIcon = styled.img`
height: 120px;
width: 120px;
margin-bottom: 10px;
align-items: center;

@media screen and (max-width: 280px) {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
}
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;
padding-top: 50px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
text-align: center;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;