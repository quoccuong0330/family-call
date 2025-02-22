import HeaderComponent from "../../components/HeaderComponent";

export default function ListPolice() {
    return <div class="">
    <main id="page-danhsach">
				<HeaderComponent title="Quản lý cán bộ / Danh sách cán bộ"/>
				<div class="main-content">
					<div class="inner">
						<div class="show-form">
							<div class="show-form__item">
								<dl>
									<dt>Tên</dt>
									<dd>
										<input type="text" class="form-control"/>
									</dd>
								</dl>
							</div>
							<div class="show-form__item">
								<dl>
									<dt>Mã cán bộ</dt>
									<dd>
										<input type="text" class="form-control"/>
									</dd>
								</dl>
							</div>
							<div class="show-form__item">
								<dl>
									<dt>Chức vụ</dt>
									<dd>
										<select class="form-control">
											<option>Quân khu 1</option>
										</select>
									</dd>
								</dl>
							</div>
							<div class="show-form__item">
								<dl>
									<dt>Phòng ban</dt>
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
											<th>Họ và tên</th>
											<th>Ngày nhập trại</th>
											<th>Khu</th>
											<th>Giới tính</th>
											<th>Tội danh</th>
											<th>Sức khỏe</th>
											<th>Ngày ra</th>
											<th>Thời gian<small>(Phút)</small></th>
											<th>Ngày đăng ký</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span class="js-popup-profile">-</span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span>10/02/2025<small class="note-time">15:30</small></span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span class="js-popup-profile">-</span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span>10/02/2025<small class="note-time">15:30</small></span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span class="js-popup-profile">-</span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span>10/02/2025<small class="note-time">15:30</small></span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span class="js-popup-profile">-</span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span class="js-popup-profile">PN001</span>
											</td>
											<td>
												<span class="js-popup-profile">Trần Văn Tú</span>
											</td>
											<td>
												<span class="js-popup-profile">23/08/1990</span>
											</td>
											<td>
												<span class="js-popup-profile">Quân khu 1</span>
											</td>
											<td>
												<span class="js-popup-profile">Nam</span>
											</td>
											<td>
												<span class="js-popup-profile">Buôn ma túy</span>
											</td>
											<td>
												<span class="js-popup-profile">Bình thường</span>
											</td>
											<td>
												<span class="js-popup-profile">01/01/2027</span>
											</td>
											<td>
												<span class="js-popup-profile">30</span>
											</td>
											<td>
												<span>10/02/2025<small class="note-time">15:30</small></span>
											</td>
											<td>
												<div class="btn-item">
													<span class="js-popup-profile"><i class="fa-regular fa-pen-to-square"></i></span>
													<span class="c-fc--gray"><i class="fa-solid fa-trash-can"></i></span>
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
			<div class="popup">
				<span class="popup-bg js-popup-close"></span>
				<div class="popup-show">
					<div class="popup-show__ttl"> Đăng ký gọi : Phạm nhân Trần Huyền Diệp </div>
					<div class="popup-show__ct">
						<dl>
							<dt>Cán bộ đăng ký</dt>
							<dd>
								<select class="form-control">
									<option>Lý Ngọc Anh</option>
								</select>
							</dd>
						</dl>
						<dl>
							<dt>Cán bộ phụ trách</dt>
							<dd>
								<select class="form-control">
									<option>Lý Ngọc Anh</option>
								</select>
							</dd>
						</dl>
						<dl>
							<dt>Nhân thân</dt>
							<dd>
								<select class="form-control">
									<option>Lý Ngọc Anh</option>
								</select>
							</dd>
						</dl>
						<dl>
							<dt>Thời gian gọi<span class="note">(Tối đa 20 phút)</span></dt>
							<dd>
								<div class="note-time">
									<input type="text" class="form-control"/>
									<span class="note-time__btn">Phút</span>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>Ngày gọi</dt>
							<dd>
								<input type="text" class="form-control"/>
							</dd>
						</dl>
						<dl>
							<dt>Lưu ý</dt>
							<dd>
								<textarea class="form-control"></textarea>
							</dd>
						</dl>
					</div>
					<div class="popup-show__sub">
						<button type="button" class="c-btn__01 c-bg--gray js-popup-close">Đóng</button>
						<button type="button" class="c-btn__01">Lưu</button>
					</div>
				</div>
			</div>
    </div>
}