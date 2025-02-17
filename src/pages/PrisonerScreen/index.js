import { JitsiMeeting } from "@jitsi/react-sdk";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { AppContext } from "../../App";
import HeaderComponent from "../../components/HeaderComponent";
import "./styles.css";

export default function PrisonerScreen() {
  const [dataJitsi, setDataJitsi] = useState(null);
  const { currentUser, prisoners } = useContext(AppContext);
  const [timeLimit, setTimeLimit] = useState(null);
  const [statusMeeting, setStatusMeeting] = useState(null);
  const [idRecord, setIdRecord] = useState(null);

  useEffect(() => {
    const colRef = collection(db, "family-call");
    const q = query(colRef, orderBy("timestamp", "desc"), limit(1));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];

        const data = docSnap.data();

        setIdRecord(docSnap.id);

        if (!docSnap.metadata.hasPendingWrites) {
          if (
            data.status === "on" &&
            currentUser.id === data.id_prisoner &&
            currentUser.role === "Prisoner"
          ) {
            setDataJitsi(data);
            setStatusMeeting("on");
          }
          if (
            data.status === "off" &&
            currentUser.id === data.id_prisoner &&
            currentUser.role === "Prisoner"
          ) {
            alert("Quan giao da ket thuc cuoc goi");
            setDataJitsi(null);
            setStatusMeeting(data.status);
          }
        }
      } else {
        console.log(" Không có document nào trong collection!");
      }
    });
    return () => unsubscribe();
  }, []);

  const updateDocument = async (docId) => {
    try {
      const docRef = doc(db, "family-call", docId); // Lấy tham chiếu tới tài liệu cần cập nhật
      await updateDoc(docRef, {
        status: "off", // Chỉ cập nhật trường status
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <HeaderComponent title="Goi dien" />
      <div style={{ height: "65px" }}></div>

      <div
        className="jitsi-block"
        style={{ height: "100%", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 3,
            background: "red",
            fontSize: "18px",
          }}
        >
          {dataJitsi && <CountdownTimer minutes={dataJitsi.time_limit} />}
        </div>
        {dataJitsi && (
          <JitsiMeeting
            domain={dataJitsi.room_link}
            roomName={dataJitsi.id_prisoner + ""}
            configOverwrite={{
              idleTimeout: 10,
              prejoinConfig: {
                enabled: false,
              },
              startWithAudioMuted: false,
              startWithVideoMuted: false,
            }}
            interfaceConfigOverwrite={{}}
            userInfo={{
              displayName: currentUser?.name,
            }}
            onApiReady={(externalApi) => {
              if (statusMeeting === "off") {
                externalApi.executeCommand("hangup");
              } else {
                setTimeout(() => {
                  externalApi.executeCommand("hangup");
                  updateDocument(idRecord);
                }, dataJitsi?.time_limit * 60000);
              }
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = "100%";
              iframeRef.style.width = "100vw";
            }}
            onReadyToClose={() => {
              setDataJitsi(null);
              alert("Cuoc goi ket thuc");

            }}
          />
        )}
      </div>
    </div>
  );
}

const CountdownTimer = ({ minutes = 1 }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // Chuyển phút thành giây

  useEffect(() => {
    if (timeLeft <= 0) return; // Dừng nếu hết giờ

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Xóa timer khi component unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
    </div>
  );
};
