import React, { useState } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Icon7 from '../../images/thanks.svg';
import DonateHereButton from './DonateHereButton' 
import {
  DonationContainer,
  DonationWrap,
  Icon,
  DonationContent,
  DonationCard,
  DonationIcon,
  DonationH1,
  DonationP,
  PayPalButton,
  Text
} from './Donation.Styled';

const Donation = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <DonationContainer>
        <DonationWrap>
          <Icon to="/">TCL</Icon>
          <DonationContent>
            <DonationCard>
              <DonationH1>We Appreciate Your Help</DonationH1>
              <DonationIcon src={Icon7}/>
              <DonationP>Hooray, we are getting one more yacht! And a chocolate fountain! And a Porsche! the red one!</DonationP>
              {checkout ? (
                <PayPalScriptProvider 
                options={{
                  "client-id": "Ad3abSgElNfJilLoc1QFYHkwP7-eoBXst57ZDG4WI7ujUYvAmoplR0YNWXTZALHby-ImUDLJdce52-jc",
                  components: "buttons",
                  currency: "CAD"
                }}
              >
                <DonateHereButton />
              </PayPalScriptProvider> 
              ) : (
                <PayPalButton 
                  type="submit"
                  onClick={() => {
                    setCheckout(true)
                  }}
                >
                  Donate
                </PayPalButton>
                )}
              <Text>Thank You!</Text>
            </DonationCard>
          </DonationContent>
        </DonationWrap>
      </DonationContainer>
    </>
  );
};

export default Donation

