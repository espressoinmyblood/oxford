import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DonationContainer = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
top: 0;
right: 0;
z-index: 0;
overflow: hidden;
background: #010101;
`;

export const DonationWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 768px) {
    margin-left: 20px;
}

@media screen and (max-width: 480px) {
    margin-left: 10px;
    margin-top: 8px;
}

@media screen and (max-width: 280px) {
    padding-top: 30px;
    padding-left: 8px;
    margin-top: 30px;
}
`;

export const DonationContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 20px;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`;

export const DonationIcon = styled.img`
height: 200px;
width: 200px;
margin-bottom: 10px;
align-items: center;

@media screen and (max-width: 480px) {
    height: 120px;
    width: 120px;
    margin-bottom: 5px;
}
`;

export const DonationCard = styled.div`
max-width: 500px;
width: auto;
margin: 0 auto;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 4px;
height: auto;
z-index: 1;
padding: 100px 32px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
transition: all 0.2s ease-in-out;

@media screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 30px;
}

@media screen and (max-width: 480px) {
    padding: 20px 32px;
}

@media screen and (max-width: 280px) {
    width: 240px;
    padding: 32px 32px;
    margin-top: 50px;
}

@media screen and (max-height: 600px) {
    margin-bottom: 140px;
    margin-top: 0;
    height: 70%;
}
`;


export const DonationH1 = styled.h1`
margin-bottom: 10px;
color: #010101;
font-size: 28px;
font-weight: 400;
text-align: center;
`;

export const DonationP = styled.p`
font-size: 1rem;
text-align: center;
color: #010101;
margin-bottom: 30px;
`;

export const PayPalButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #010101;
font-size: 20px;
width: 150px;

&:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const Text = styled.span`
text-align: center;
margin-top: 32px;
color: #010101;
font-size: 14px;
`;
