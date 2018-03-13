import React from "react";
import styled from "styled-components";

const TextInput = styled.input.attrs({
  type: "text",
  name: "EMAIL",
  placeholder: "Email address"
})`
  font-size: 13px;
  border-radius: 25px;
  margin-right: 5px;
  border: none;
  width: 232px;
  padding: 18px 32px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 154px;
    height: 5px;
  }
`;

const HiddenWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const SubmitButton = styled.input.attrs({
  type: "submit",
  name: "subscribe",
  value: "PRE-REGISTER",
  id: "mc-embedded-subscribe"
})`
  margin: 0px 5px;
  cursor: pointer;
  font-size: 12px;
  height: 38px;
  border-width: 2px;
  border-style: solid;
  border-color: #6a48fd;
  border-radius: 25px;
  background: ${props =>
    props.highlighted
      ? "linear-gradient(270deg, #3314BA 0%, #6A48FD 100%)"
      : "#270668"};
  color: white;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

const EmailSignup = () => (
  <form
    action="https://launchtoken.us12.list-manage.com/subscribe/post?u=35e87b924e3b5394fbcf4c3cb&amp;id=9189356410"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    target="_blank"
    noValidate
  >
    <TextInput />
    <HiddenWrapper aria-hidden="true">
      <input
        type="text"
        name="b_35e87b924e3b5394fbcf4c3cb_9189356410"
        tabIndex="-1"
        value=""
      />
    </HiddenWrapper>
    <SubmitButton highlighted />
  </form>
);

export default EmailSignup;
