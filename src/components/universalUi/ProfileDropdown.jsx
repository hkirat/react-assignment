import React from "react";
import { Dropdown } from "react-bootstrap";
import man from "./man.png";
function ProfileDropdown(props) {
  // custom toggle control for dropdown menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={man} style={{ width: "45px", height: "45px" }} alt="yoyo"></img>
      {children}
    </a>
  ));

  return (
    <div className="d-inline-block me-5 ">
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id="dropdown-custom-components"
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.ItemText>
            Hi ! {props.user && props.user.userName}
          </Dropdown.ItemText>
          <Dropdown.Item as="button" onClick={props.logOut}>
            {" "}
            Log Out
          </Dropdown.Item>
          <Dropdown.Item>More options</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ProfileDropdown;
