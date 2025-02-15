import { useContext, useEffect,  useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import "../../styles/scss/styles.scss";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { AppContext } from "../../App";

export default function ManageCall() {
  const [step, setStep] = useState(0);
  const [dataJitsi, setDataJitsi] = useState(null);
  const { currentUser, prisoners,timestamp } = useContext(AppContext);
  const [isShowVideo,setIsShowVideo] = useState(true)

  const addDocument = async () => {
    try {
      const data = {
        name_room: "example",
        id_room: "1423",
        id_prisoner: 2,
        id_family: 3,
        room_link: `jitsi.inisoft.vn`,
        time_limit: 30,
        timestamp: Date.now(), // Thêm timestamp
      };
      await addDoc(collection(db, "family-call"), data);
      alert("Created room")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

 

  useEffect(() => {
    const colRef = collection(db, "family-call");
    const q = query(colRef, orderBy("timestamp", "desc"), limit(1));
 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        const data = docSnap.data();
        console.log(data, data.timestamp < timestamp)
        if(data.timestamp > timestamp) {
          return
        }

        if (!docSnap.metadata.hasPendingWrites) {
          const family = prisoners.filter(
            (e) => e.prisoner_id === data.id_prisoner
          );
          if (
            currentUser.id === data.id_prisoner &&
            currentUser.role === "Prisoner"
          ) {
            setDataJitsi(data);
          }

          if (
            family[0].family_id === data.id_family &&
            currentUser.role === "Family"
          ) {
            setDataJitsi(data);
          }
            setIsShowVideo(true)
        }
      } else {
        console.log("⚠️ Không có document nào trong collection!");
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
                {currentUser?.role === "Police" && (
                  <div onClick={() => addDocument()}>Create room</div>
                )}
                <div onClick={() => step < 2 && setStep(step + 1)}>Confirm</div>
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
              {!dataJitsi && (
                <img alt="image3" src={require("../../img/call.avif")} />
              )}
              {dataJitsi && isShowVideo && (
                <JitsiMeeting
                  domain={dataJitsi.room_link}
                  roomName={dataJitsi.id_prisoner + ""}
                  configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false,
                  }}
                  interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                  }}
                  userInfo={{
                    displayName: currentUser?.name,
                  }}
                  onApiReady={(externalApi) => {
                    console.log("Jitsi API is ready", externalApi);
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                  }}
                  getIFrameRef={(iframeRef) => {
                    iframeRef.style.height = "100%";
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
