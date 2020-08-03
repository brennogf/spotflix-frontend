import React from "react";

import { AlertContainer } from "./styles";

export default function Alert({ children, type }) {
  switch (type) {
    case "danger":
      type = "#f44336";
      break;
    case "success":
      type = "#4CAF50";
      break;
  }
  return (
    <AlertContainer type={type}>
      <div id="alert" class="alert">
        <span
          class="closebtn"
          onClick={() => {
            document.getElementById("alert").style.display = "none";
          }}
        >
          &times;
        </span>
        {children}
      </div>
    </AlertContainer>
  );
}
