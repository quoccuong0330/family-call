import React, { useContext, useState } from "react";
import "../../styles/scss/styles.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const HeaderComponent = (props) => {
  const { title } = props;
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { currentUser } = useContext(AppContext);

 
  return (
    <div class="heading-note">
      <h1 class="heading-note__ttl">{title}</h1>
      <div
        class="heading-note__account "
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <span class="heading-note__account-name">{currentUser?.role}</span>
        <div class="heading-note__account-avatar">
          <img src={require("../../img/avatar.png")} alt="img" />
        </div>
        <ul class={`${isShowMenu && "active"} heading-note__account-profile`}>
          <li>
            <a href="">
              <i class="fa-regular fa-pen-to-square"></i>Chỉnh sửa thông tin
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-regular fa-bell"></i>Thiết lập thông báo
            </a>
          </li>
          <li>
            <Link to="/login">
              <i class="fa-solid fa-right-from-bracket"></i>Đăng xuất
            </Link>
          </li>
        </ul>
        <span class="heading-note__account-close"></span>
      </div>
    </div>
  );
};

export default HeaderComponent;
