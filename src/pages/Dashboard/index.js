import { use, useContext } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import "./styles.css";
import { AppContext } from "../../App";
export default function Dashboard() {
  const { currentUser,  users } = useContext(AppContext);
  console.log(currentUser, users);
 
  return (
    <>
      <HeaderComponent title="Tổng quan" />
      <div class="main-content">
        <div class="inner">
          <div class="dashboard">
            <div class="dashboard-task">
              <table>
                <tr>
                  <th>ID</th>
                  <th>Task</th>
                  <th>Thời gian</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Lịch gọi 1</td>
                  <td>20/10/2024 8:00 AM</td>
                  <td>Done</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lịch gọi 2</td>
                  <td>20/10/2024 8:00 AM</td>
                  <td>Cancel</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lịch gọi 4</td>
                  <td>20/10/2024 8:00 AM</td>
                  <td>Done</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lịch gọi 4</td>
                  <td>20/10/2024 8:00 AM</td>
                  <td>Cancel</td>
                </tr>
              </table>
            </div>
            <div class="dashboard-table">
              <table>
                <tr>
                  <th colspan="7">20/10/2014</th>
                  <th colspan="5">27/10/2024</th>
                </tr>
                <tr>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                </tr>
              </table>
            </div>
          </div>
          <div class="dashboard-chart"></div>
          <style></style>
        </div>
      </div>
    </>
  );
}
