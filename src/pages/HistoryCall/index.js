import HeaderComponent from "../../components/HeaderComponent";

export default function HistoryCall() {
    return 	<div class="wrapper">
  <HeaderComponent title="Quản lý lịch gọi / Gọi
"/>
    <main id="page-quanlygoi-note">
        <div class="heading-note">
            <h1 class="heading-note__ttl">Quản lý lịch gọi / Gọi</h1>
            <div class="heading-note__account">
                <span class="heading-note__account-name">Nguyễn Văn Toàn</span>
                <div class="heading-note__account-avatar">
                    <img src={require("../../img/avatar.png")} alt="img"/>
                </div>
                <ul class="heading-note__account-profile">
                    <li><a href=""><i class="fa-regular fa-pen-to-square"></i>Chỉnh sửa thông tin</a></li>
                    <li><a href=""><i class="fa-regular fa-bell"></i>Thiết lập thông báo</a></li>
                    <li><a href=""><i class="fa-solid fa-right-from-bracket"></i>Đăng xuất</a></li>
                </ul>
                <span class="heading-note__account-close"></span>
            </div>
        </div>
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
                        </div>
                        <div class="call-block__ct">
                            <h3 class="call-block__ct-ttl">
                                <span>Tóm tắt nội dung</span>
                                <span class="call-block__ct-time c-fc--red">12:30</span>
                            </h3>
                            <p>Trong cuộc gọi ngắn giữa hai vợ chồng, giọng người vợ trầm buồn và đầy cảm xúc. Cô đang thi hành án trong trại giam và mong muốn được nghe tin tức từ gia đình.</p>
                            <p>Trong cuộc gọi ngắn giữa hai vợ chồng, giọng người vợ trầm buồn và đầy cảm xúc. Cô đang thi hành án trong trại giam và mong muốn được nghe tin tức từ gia đình.</p>
                            <p>Trong cuộc gọi ngắn giữa hai vợ chồng, giọng người vợ trầm buồn và đầy cảm xúc. Cô đang thi hành án trong trại giam và mong muốn được nghe tin tức từ gia đình.</p>
                        </div>
                    </div>
                    <div class="call-block--right">
                        <img src={require("../../img/call.avif")}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
}