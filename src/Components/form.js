import React from "react";
import styled from "styled-components";
// import ValidateEmail from "./email";
import "./form.css";

export default function Form() {
  return (
    <Contact>
      <p>We will get in touch shortly.</p>
      <ContactForm>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />

        <label for="address">Address</label>
        <input type="text" name="address" id="address" />

        <label for="contactno">Contact no</label>
        <input type="text" name="contactno" id="contactno" />

        <label for="email">Email</label>
        <input type="email" name="email" id="email"> 
        {/* <ValidateEmail/> */}
        </input>

        <label>Questions/Comments</label>
        <textarea />

        <br />
        <SubmitButton>
          <button type="submit" class="registerbtn">
            Register
          </button>
        </SubmitButton>
      </ContactForm>
    </Contact>
  );
}

const Contact = styled.div`
  padding: 30px 90px;
  display: grid;
  line-height: 170%;
  justify-content:center;
  /* align-items:center; */
`
const ContactForm = styled.div`
  display: grid;
  max-width: 90%;
  /* align-content:center; */
  padding: 20px 75px;
  border-style: dashed;
  border-color: #3ca899;
  font-family: "Omnes";
  box-sizing: border-box;
  background: rgba(217, 217, 217, 0.3);
  border: 3px dashed #3ca899;
  border-radius: 30px;
  line-height: 200%;
`
const SubmitButton = styled.div`
  align-self:center;
  display:grid;
  padding-left:130px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  
  :hover{
    transform:translateY(-3px);
    
  }
`
