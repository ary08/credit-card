import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import App from './App.js';

var card_numbers = document.getElementsByClassName("card_numbers")[0];
card_numbers.onkeyup = function (e) {
  var target = e.srcElement;
  var maxLength = parseInt(target.attributes["maxlength"].value, 10);
  var myLength = target.value.length;
  if (myLength >= maxLength) {
    var next = target;
    while ((next = next.nextElementSibling)) {
      if (next == null) break;
      if (next.tagName.toLowerCase() == "input") {
        next.focus();
        break;
      }
    }
  }
};

ReactDOM.render(
  <>
    <div className="main_div">
      <div className="center_div">
        <div className="top_div">
          <div className="card_number">
            <div className="card_number_label">CARD NUMBER</div>
            <div className="card_numbers">
              <input type="text" class="tb_number_0" maxlength="4" />
              <input type="text" class="tb_number_1" maxlength="4" />
              <input type="text" class="tb_number_2" maxlength="4" />
              <input type="text" class="tb_number_3" maxlength="4" />
            </div>
            <button className="sub">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
