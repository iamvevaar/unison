import React from "react";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import {FaTwitter} from "react-icons/fa"
const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Join our community to know more</h1>
      <p>Join our Discord base camp as a hunter and catch best yields!</p>
      <div className="discordContainer">
        <RxDiscordLogo />
        Join Now
      </div>
        <p>Follow Us On Twitter</p>
        <FaTwitter/>
    </div>
  );
};

export default Contacts;
