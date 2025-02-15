import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import "../../styles/scss/styles.scss";

export default function ManageCall() {
  const [step, setStep] = useState(0);
  console.log(step);

  return (
    <div id="page-quanlygoi3">
      <HeaderComponent title="Quản lý lịch gọi / Gọi" />
      <div class="main-content">
        <div class="inner">
          <div class="call-block">
            <div class="call-block--left">
              <div class="call-block__note">
                <table>
                  <tr>
                    <th>Tên phạm nhân :</th>
                    <td>Trần Huyền Diệp</td>
                  </tr>
                  <tr>
                    <th>Mã phạm nhân :</th>
                    <td>PN007</td>
                  </tr>
                  <tr>
                    <th>Cán bộ đăng ký :</th>
                    <td>Lý Ngọc Anh</td>
                  </tr>
                  <tr>
                    <th>Cán bộ phụ trách :</th>
                    <td>Vũ Như Ngọc</td>
                  </tr>
                </table>
                <div onClick={() => step < 2 && setStep(step + 1)}>click</div>
              </div>
              {step === 2 && (
                <div class="call-block__steps">
                  <div class="call-block__steps-item active">
                    <h3 class="call-block__steps-ttl">
                      Bước 1 : Kết nối ứng dụng
                    </h3>
                    <p>Họ và tên : Vũ Thế Ngọc</p>
                    <p>CCCD: 0123456789 - Cấp Ngày 01/01/2020 Tại Hà Nội</p>
                    <ul class="call-block__steps-img">
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green active">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/avatar.png")} />
                        <span class="call-block__steps-icon c-fc--green active">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green active">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                    </ul>
                    <span class="call-block__steps-status c-bg--green">
                      Thành công
                    </span>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 2 : Xác thực thông tin
                    </h3>
                    <ul class="call-block__steps-profile">
                      <li>Xác thực Vũ THế Ngọc</li>
                      <li>Kiểm tra xung quanh không có người thứ 2</li>
                    </ul>
                    <span class="call-block__steps-status c-bg--green">
                      Xác thực
                    </span>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 3 : Tiến hành cuộc gọi
                    </h3>
                    <span class="call-block__steps-status c-fc--dark">
                      Đang gọi..
                    </span>
                  </div>
                </div>
              )}
              {step === 0 && (
                <div class="call-block__steps">
                  <div class="call-block__steps-item active">
                    <h3 class="call-block__steps-ttl">
                      Bước 1 : Kết nối ứng dụng
                    </h3>
                    <p>Họ và tên : Vũ Thế Ngọc</p>
                    <p>CCCD: 0123456789 - Cấp Ngày 01/01/2020 Tại Hà Nội</p>
                    <ul class="call-block__steps-img">
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/avatar.png")} />
                        <span class="call-block__steps-icon c-fc--green">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                    </ul>
                    <span class="call-block__steps-status">Đang nối máy..</span>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 2 : Xác thực thông tin
                    </h3>
                    <ul class="call-block__steps-profile">
                      <li>Xác thực Vũ THế Ngọc</li>
                      <li>Kiểm tra xung quanh không có người thứ 2</li>
                    </ul>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 3 : Tiến hành cuộc gọi
                    </h3>
                    <ul class="call-block__steps-profile">
                      <li>Gọi điện</li>
                      <li>Lưu thông tin</li>
                    </ul>
                  </div>
                </div>
              )}
              {step === 1 && (
                <div class="call-block__steps">
                  <div class="call-block__steps-item active">
                    <h3 class="call-block__steps-ttl">
                      Bước 1 : Kết nối ứng dụng
                    </h3>
                    <p>Họ và tên : Vũ Thế Ngọc</p>
                    <p>CCCD: 0123456789 - Cấp Ngày 01/01/2020 Tại Hà Nội</p>
                    <ul class="call-block__steps-img">
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green active">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/avatar.png")} />
                        <span class="call-block__steps-icon c-fc--green active">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                      <li>
                        <img src={require("../../img/test.jpg")} />
                        <span class="call-block__steps-icon c-fc--green">
                          <i class="fa-solid fa-video"></i>
                        </span>
                      </li>
                    </ul>
                    <span class="call-block__steps-status c-bg--green">
                      Thành công
                    </span>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 2 : Xác thực thông tin
                    </h3>
                    <ul class="call-block__steps-profile">
                      <li>Xác thực Vũ THế Ngọc</li>
                      <li>Kiểm tra xung quanh không có người thứ 2</li>
                    </ul>
                  </div>
                  <div class="call-block__steps-item">
                    <h3 class="call-block__steps-ttl">
                      Bước 3 : Tiến hành cuộc gọi
                    </h3>
                    <ul class="call-block__steps-profile">
                      <li>Gọi điện</li>
                      <li>Lưu thông tin</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div class="call-block--right">
              <img alt="image3" src={require("../../img/call.avif")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
