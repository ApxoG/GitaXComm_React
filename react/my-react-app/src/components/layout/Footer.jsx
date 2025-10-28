import React from "react";

function Footer({ navData }) {
  const headerStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    width: "100%",
    color: "black",
    gap: "50px",
  };
  return (
    <ul style={headerStyle} className="test">
      {navData.map((item, index) => (
        <li key={index}>{item?.title}</li>
      ))}
    </ul>
  );
}

export default Footer;
