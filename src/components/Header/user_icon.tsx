import React from "react";
import Menu from "@mui/material/Menu";
import user_icon from './../../assets/images/user_icon.svg';
import { MyPageMenuItem } from "../Elements/MenuItem/MyPage";
import { LoginMenuItem } from "../Elements/MenuItem/Login";
import { LogoutMenuItem } from "../Elements/MenuItem/Logout";




export default function UserIcon(){
  const [open, setOpen] = React.useState<boolean>(false);

  const anchorEl = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return(
    <>
    <div id="user-icon" ref={anchorEl}><img onClick={handleClick} src={user_icon}></img></div>
    <Menu anchorEl={anchorEl.current} open={open} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: -150}} >
      <MyPageMenuItem />
      <LoginMenuItem />
      <LogoutMenuItem />
    </Menu>
    </>
  )
}