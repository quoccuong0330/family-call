import { Link } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";

export default function ListCall() {
    return <main id="page-danhsach-lichgoi">
   <HeaderComponent title="Quản lý lịch gọi / Danh sách lịch gọi"/>
    <div class="main-content">
        <div class="inner">
            <div class="show-form">
                <div class="show-form__item">
                    <dl>
                        <dt>Tên phạm nhân</dt>
                        <dd>
                            <input type="text" class="form-control"/>
                        </dd>
                    </dl>
                </div>
                <div class="show-form__item">
                    <dl>
                        <dt>Mã phạm nhân</dt>
                        <dd>
                            <input type="text" class="form-control"/>
                        </dd>
                    </dl>
                </div>
                <div class="show-form__item">
                    <dl>
                        <dt>Quân khu</dt>
                        <dd>
                            <select class="form-control">
                                <option>Quân khu 1</option>
                            </select>
                        </dd>
                    </dl>
                </div>
                <div class="show-form__item">
                    <dl>
                        <dt>Đăng ký gọi</dt>
                        <dd>
                            <select class="form-control">
                                <option>Quân khu 1</option>
                            </select>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="search-all">
                <div class="search-all__heading">
                    <a href="" class="c-btn__01">
                        <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm </a>
                    <a href="" class="c-btn__01">
                        <i class="fa-solid fa-plus"></i>
                    </a>
                </div>
                <div class="show-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Phạm nhân</th>
                                <th>Thời gian đăng ký</th>
                                <th>Cán bộ đăng ký</th>
                                <th>Cán bộ phụ trách</th>
                                <th>Nhân thân</th>
                                <th>Thời gian<small>(Phút)</small></th>
                                <th>Tình trạng</th>
                                <th>Thời gian gọi</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PN002</td>
                                <td>Phạm Huỳnh Mai</td>
                                <td>08/02/2025 15:30</td>
                                <td><strong>Lý Ngọc Anh</strong></td>
                                <td><strong>Nguyễn Ngọc Vũ</strong></td>
                                <td>Mẹ - Ngô Thị Đào</td>
                                <td>20</td>
                                <td>Hoàn thành</td>
                                <td>10/02/2025 15:30</td>
                                <td>
                                    <div class="btn-item">
                                        <Link to="/thong-tin-cuoc-goi">Báo cáo</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>PN002</td>
                                <td>Phạm Huỳnh Mai</td>
                                <td>08/02/2025 15:30</td>
                                <td><strong>Lý Ngọc Anh</strong></td>
                                <td><strong>Nguyễn Ngọc Vũ</strong></td>
                                <td>Chồng - Vũ Thế Ngọc</td>
                                <td>20</td>
                                <td>Chờ</td>
                                <td>10/02/2025 15:30</td>
                                <td>
                                    <div class="btn-item">
                                        <span><i class="fa-solid fa-video"></i></span>
                                        <span class="c-fc--gray">Hoãn</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Trước</a></li>
                    <li class="page-item"><a class="page-link active" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Sau</a></li>
                </ul>
            </div>
        </div>
    </div>
</main>
}