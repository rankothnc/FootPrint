import React from "react";
import styled from "styled-components";


export default function Form() {

  return (
    <Contact>
      <form action="action_page.php">

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />

        <button type="submit" class="registerbtn">Register</button>

      </form>
    </Contact>
  )
}


const Contact = styled.div`
    color: rgb(0,0,0);
`
