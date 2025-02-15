import HeaderComponent from "../../components/HeaderComponent";

export default function AddPrisoner() {
    return <div class="wrapper">
   <HeaderComponent title="Quản lý phạm nhân / Thông tin phạm nhân"/>
    <main id="page-thongtin-phamnhan">
         
        <div class="main-content">
            <div class="inner">
                <ul class="tab-menu">
                    <li class="active">Thông tin phạm nhân</li>
                    <li>Nhân Thân</li>
                </ul>
                <form>
                    <div class="tab-content">
                        <div class="tab-content__item active">
                            <div class="form-block">
                                <div class="form-block--left">
                                    <div class="show-form">
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Họ và tên</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Mã Phạm nhân</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Email</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Số điện thoại</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Thành phố</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Thành phố</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Quận huyện</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Thành phố</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item w-100">
                                            <dl>
                                                <dt>Địa chỉ</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>CCCD</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Ngày cấp</dt>
                                                <dd>
                                                    <input type="text" class="form-control date" placeholder="__/__/___"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item w-100">
                                            <dl>
                                                <dt>Nơi cấp</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Ngày vào</dt>
                                                <dd>
                                                    <input type="text" class="form-control date" placeholder="__/__/___"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Ngày ra</dt>
                                                <dd>
                                                    <input type="text" class="form-control date" placeholder="__/__/___"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item w-100">
                                            <dl>
                                                <dt>Nơi sinh</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Giới tính</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Choose</option>
                                                        <option>Nam</option>
                                                        <option>Nữ</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-block--right">
                                    <div class="form-block__img">
                                        <div class="form-block__img-show" id="fileList"></div>
                                        <div class="form-block__img-btn">
                                            <input type="file" id="fileElem" multiple="multiple" accept="image/*" style={{display:"none"}} onchange="handleFiles(this.files)"/>
                                            <span class="form-block__img-btn-open" id="fileSelect">Tải ảnh lên</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content__item">
                            <div class="form-block">
                                <div class="form-block--left">
                                    <div class="show-form">
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Họ và tên</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Quan hệ</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Chồng</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Email</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Số điện thoại</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Thành phố</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Thành phố</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Quận huyện</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Thành phố</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item w-100">
                                            <dl>
                                                <dt>Địa chỉ</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>CCCD</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Ngày cấp</dt>
                                                <dd>
                                                    <input type="text" class="form-control date" placeholder="__/__/___"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item w-100">
                                            <dl>
                                                <dt>Nơi cấp</dt>
                                                <dd>
                                                    <input type="text" class="form-control"/>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="show-form__item">
                                            <dl>
                                                <dt>Giới tính</dt>
                                                <dd>
                                                    <select class="form-control">
                                                        <option>Choose</option>
                                                        <option>Nam</option>
                                                        <option>Nữ</option>
                                                    </select>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-block--right">
                                    <div class="form-block__img">
                                        <div class="form-block__img-show" id="fileList"></div>
                                        <div class="form-block__img-btn">
                                            <input type="file" id="fileElem" multiple="multiple" accept="image/*" style={{display:"none"}} onchange="handleFiles(this.files)"/>
                                            <span class="form-block__img-btn-open" id="fileSelect">Tải ảnh lên</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="c-btn__01">Thêm mới</button>
                </form>
            </div>
        </div>
    </main>
</div>
}