import { useContext, useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import "../../styles/scss/styles.scss";
import {
  addDoc,
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase";

export default function ManageCall() {
  const [step, setStep] = useState(0);
  const [idRecord, setIdRecord] = useState(null);

  const addDocument = async () => {
    try {
      const data = {
        name_room: "example",
        id_room: "1423",
        id_prisoner: 2,
        id_family: 3,
        room_link: `jitsi.inisoft.vn`,
        time_limit: 0.1,
        timestamp: Date.now(),
        status: "on",
      };
      const res = await addDoc(collection(db, "family-call"), data);
      setIdRecord(res.id);
      alert("Created room");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateDocument = async (docId) => {
    try {
      const docRef = doc(db, "family-call", docId); // Lấy tham chiếu tới tài liệu cần cập nhật
      await updateDoc(docRef, {
        status: "off", // Chỉ cập nhật trường status
      });
      setIdRecord(null);
      alert("Document updated successfully");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  useEffect(() => {
    const colRef = collection(db, "family-call");
    const q = query(colRef, orderBy("timestamp", "desc"), limit(1));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        const data = docSnap.data();

        if (!docSnap.metadata.hasPendingWrites) {
          if (data.status === "off") {
            setIdRecord(null);
            console.log(idRecord);
          }
        }
      } else {
        console.log("Không có document nào trong collection!");
      }
    });
    return () => unsubscribe();
  }, []);

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
                {/* {currentUser?.role === "Police" && (
                  <div >Create room</div>
                )} */}
                {/* <div onClick={() => step < 2 && setStep(step + 1)}>Confirm</div> */}
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
              <img
                alt="image3"
                src={require("../../img/call.avif")}
                style={{ cursor: "pointer" }}
                onClick={() => addDocument()}
              />

              {idRecord && (
                <div onClick={() => updateDocument(idRecord)}>cancel</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
