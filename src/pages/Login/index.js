import { Link } from "react-router-dom";

export default function Login(second) {
    return <div class="login">
    <div class="login-show">
        <h1 class="login-show__ttl">Family Voice</h1>
        <div class="login-show__logo">
            <img src={require("../../img/logo.png")} alt="img" width="80"/>
        </div>
        <div class="login-show__form">
            <dl>
                <dt>Tài khoản :</dt>
                <dd>
                    <input type="text" class="form-control"/>
                </dd>
            </dl>
            <dl>
                <dt>Mật khẩu :</dt>
                <dd>
                    <input type="password" class="form-control"/>
                </dd>
            </dl>
            <div class="login-show__form-sub">
                <Link to="/thong-ke" type="button" class="c-btn__01"> Đăng Nhập </Link>
            </div>
            <div class="login-show__form-note">
                <a href="">Quên mật khẩu</a>
                <a href="">Đăng ký</a>
            </div>
        </div>
    </div>
</div>
}