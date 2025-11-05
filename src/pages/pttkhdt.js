import React from "react";
import "../assets/style/pttkhdt.css";

const linkToggSite =
  "https://l.facebook.com/l.php?u=https%3A%2F%2Fsites.google.com%2Fview%2Faportfolio-io%2Ftrang-ch%25E1%25BB%25A7%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZmtWU3RPSFl3a09POVRBS3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR74qJAeGtJuJuBiqo27NnC574oirslEwQ91nuGsLgPWtlaHdlgcDIep4HFR_w_aem_doEGd6tnuvw3g28hXhCJOg&h=AT2KaJ-iJxmie00wJAZh_DDKUNoLrhaO68Xdw69rJ-WJjp6owZBh4tkRxt-nKHxBvi0Ys1Fl6wE51_oPW1MfYbyy33_wUqEB6RzPCHBfDEjEJxJG7KTwBnr8T_h7cZegXn7-jL3sCD56tl6mvv2j6A";

const Pttkhdt = () => {
  return (
    <div className="pttkhdt-block">
      <a href={linkToggSite} className="link-to">
        Link đến trang bài tập
      </a>
    </div>
  );
};

export default Pttkhdt;
