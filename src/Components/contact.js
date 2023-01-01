import React from "react";
import styled from "styled-components";

export default function Contacts() {
  return (
    <ContactSection>
      <ContactInfo>
        <p>hiii</p>
      </ContactInfo>

      <ContactAddress>
        <ContactCompany>
          <p>company</p>
        </ContactCompany>
        <ContactMailling>
          <p>mailling</p>
        </ContactMailling>
      </ContactAddress>
      <p>HIII</p>
    </ContactSection>
  );
}

const ContactSection = styled.div`
  font-size: 100px;
`;

const ContactInfo = styled.div``;

const ContactAddress = styled.div``;

const ContactCompany = styled.div``;

const ContactMailling = styled.div``;


