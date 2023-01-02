import React from "react";
import styled from "styled-components";
import "./Contact.css";

export default function Contacts() {
  return (
    <div>
    <h1 className="heading">Contact Us</h1>
    <ContactSection>
      <ContactInfo>
        <p>
          Would you like to set up a conversation with a team
          <br /> member? Call XXXXXXXXXXX or fill out the form
          <br />
          below to email us.
        </p>
      </ContactInfo>

      <ContactAddress>
        <ContactCompany>
          <p>
            Company
            <br />
            P.O. Box 2412
            <br />
            Livingston, NJ 07039
          </p>
        </ContactCompany>
        <ContactMailling>
          <p>Mailing Address <br /> P.O. Box 2412 <br /> 
          Livingston, NJ <br /> 
          07039</p>
        </ContactMailling>
      </ContactAddress>
    </ContactSection>
    </div>
  );
}

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 20% 30%;
  /* margin-left:100px;
margin-right:80px; */
  margin: auto 150px;
`;

const ContactInfo = styled.p`
  /* display:flex;
  justify-content: 50px;
  text-align:justify; */
  display: grid;
  margin-left:60px;
  /* align-items: center; */
  /* justify-items: left;
        text-align: justify; */


        /* position: absolute; */
width: 524px;
height: 150px;
left: 81px;
top: 310px;

font-family: 'Omnes';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
/* or 156% */

text-align: justify;
letter-spacing: -0.011em;

color: #123444;
`;

const ContactAddress = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 50% 50%;
`;

const ContactCompany = styled.div`
    text-align:right;
    /* position: absolute; */
width: 171px;
height: 57px;
left: 850px;
top: 365px;

font-family: 'Omnes';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
text-align: right;

color: #123444;

text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    
`;

const ContactMailling = styled.div`
 text-align:right;

 /* position: absolute; */
width: 171px;
height: 57px;
left: 850px;
top: 365px;

font-family: 'Omnes';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
text-align: right;

color: #123444;

text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;
