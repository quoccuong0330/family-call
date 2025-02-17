import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

export default function Login(second) {
  const { currentUser, setCurrentUser, users } = useContext(AppContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSaveCurrentUser = () => {
    const user = users.find((user) => user.name === value);
    if (user) {
      setCurrentUser(user);
      console.log("New currentUser:", user); // Debugging
      if (user.role === "Prisoner") {
        navigate("/prisoner"); // Chỉ navigate nếu role là Prisoner
      } else {
        navigate("/tao-moi-lich-goi");
      }
    } else {
      alert("User không tồn tại!");
    }
  };
  return (
    <div class="login">
      <div class="login-show">
        <h1 class="login-show__ttl">Family Voice</h1>
        <div class="login-show__logo">
          <img src={require("../../img/logo.png")} alt="img" width="80" />
        </div>
        <div class="login-show__form">
          <dl>
            <dt>Tài khoản :</dt>
            <dd>
              <input
                type="text"
                class="form-control"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </dd>
          </dl>
          <dl>
            <dt>Mật khẩu :</dt>
            <dd>
              <input type="password" class="form-control" />
            </dd>
          </dl>
          <div class="login-show__form-sub">
            <button
              type="button"
              class="c-btn__01"
              onClick={() => handleSaveCurrentUser()}
            >
              {" "}
              Đăng Nhập{" "}
            </button>
          </div>
          <div class="login-show__form-note">
            <a href="">Quên mật khẩu</a>
            <a href="">Đăng ký</a>
          </div>
        </div>
      </div>
    </div>
  );
}
