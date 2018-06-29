import React from "react";
import styled from "styled-components";

const TextInput = styled.input.attrs({
  type: "text",
  name: "EMAIL",
  placeholder: "Email address"
})`
  font-size: 14px;
  border-style: solid;
  border-width: 2px;
  border-image-source: linear-gradient(97deg, #3023ae, #c86dd7);
  border-right-width: 1;
  border-image-slice: 1;
  width: 300px;
  padding: 13px 10px;
  background-color: #ffffff;
  @media only screen and (max-width: 768px) {
    width: 170px;
  }
`;

const HiddenWrapper = styled.div`
  position: absolute;
  left: -5000px;
`;

const SubmitButton = styled.input.attrs({
  type: "submit",
  name: "subscribe",
  value: "Pre-register",
  id: "mc-embedded-subscribe"
})`
  cursor: pointer;
  font-size: 14px;
  border: none;
  background-image: linear-gradient(112deg, #3023ae, #c86dd7);
  color: white;
  padding: 15px 17px;
  margin-top: 10px;
  @media only screen and (max-width: 1300px) {
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
    <SubmitButton />
  </form>
);

export default EmailSignup;
