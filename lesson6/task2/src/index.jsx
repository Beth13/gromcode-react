import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import MailBox from "./Mailbox.jsx";

const rootElem = document.querySelector("#root");

ReactDOM.render(<MailBox unreadMessages={[]} />, rootElem);
