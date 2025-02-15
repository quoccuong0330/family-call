import { useState } from "react";
import "../../styles/scss/styles.scss";
import { Link } from "react-router-dom";

const SideBarComponent = () => {
  const [openMenus, setOpenMenus] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index, type) => {
    if (type === "menu") {
      if (openMenus.includes(index)) {
        setOpenMenus(openMenus.filter((item) => item !== index));
      } else {
        setOpenMenus([...openMenus, index]);
      }
      setActiveIndex(index);
    } else if (type === "sub") {
    }
  };

  const menuItems = [
    {
      title: "Dashboard",
      href: "/thong-ke",
      icon: <i class="fa-solid fa-gauge"></i>,
      submenu: [
        { title: "Thống kê", href: "/thong-ke" },
        { title: "Lịch trình gọi video", href: "/lich-trinh-goi-video" },
        { title: "Báo cáo hoạt động", href: "/bao-cao-hoat-dong" },
      ],
    },
    {
      title: "Quản lý cán bộ",
      href: "/danh-sach-can-bo",
      icon: <i class="fa-solid fa-user"></i>,
      submenu: [
        { title: "Danh sách cán bộ", href: "/danh-sach-can-bo" },
        { title: "Thêm mới cán bộ", href: "/them-moi-can-bo" },
      ],
    },
    {
      title: "Quản lý phạm nhân",
      href: "/them-moi-pham-nhan",
      icon: <i class="fa-solid fa-user"></i>,
      submenu: [
        { title: "Thêm mới phạm nhân", href: "/them-moi-pham-nhan" },
        { title: "Danh sách phạm nhân", href: "/danh-sach-pham-nhan" },
      ],
    },
    {
      title: "Quản lý lịch gọi",
      href: "/quan-ly-cuoc-goi",
      icon: <i class="fa-solid fa-gear"></i>,
      submenu: [
        { title: "Tạo mới lịch gọi", href: "/tao-moi-lich-goi" },
        { title: "Danh sách gọi video", href: "/danh-sach-goi-video" },
      ],
    },
    {
      title: "Cài đặt",
      href: "/setting",
      icon: <i class="fa-solid fa-gauge"></i>,
      submenu: [],
    },
  ];

  console.log(activeIndex, openMenus);

  return (
    <header id="header">
      <a href="./" class="header-logo">
        Family Voice
      </a>
      <nav class="header-nav">
        <ul class="header-nav__menu">
          {menuItems.length > 0 &&
            menuItems.map((e, i) => {
              return (
                <li
                  onClick={() => handleToggle(i, "menu")}
                  class={`header-nav__menu-item ${
                    openMenus.includes(i) && "active"
                  }`}
                  key={i}
                >
                  <Link to={e.href}>
                    {e.icon}
                    {e.title}
                  </Link>
                  {e.submenu.length > 0 && (
                    <span
                      class={`header-nav__menu-sub ${
                        openMenus.includes(i) && "active"
                      }`}
                    ></span>
                  )}

                  <ul style={{ display: openMenus.includes(i) ? "block" : "" }}>
                    {e.submenu.length > 0 &&
                      e.submenu.map((sub, i) => {
                        return (
                          <li
                            key={i}
                            
                            // class={`header-nav__menu-item ${
                            //   activeIndex[1] === i ? "active" : ""
                            // }`}
                          >
                            <Link to={sub.href}>{sub.title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          {/* <li class="header-nav__menu-item">
            <a href="">
              <i class="fa-solid fa-gauge"></i>Dashboard
            </a>
            <span class="header-nav__menu-sub"></span>
            <ul>
              <li>
                <a href="">Thống kê</a>
              </li>
              <li>
                <a href="">Lịch trình gọi video</a>
              </li>
              <li>
                <a href="">Báo cáo hoạt động</a>
              </li>
            </ul>
          </li>
          <li class="header-nav__menu-item">
            <a href="">
              <i class="fa-solid fa-user"></i>Quản lý cán bộ
            </a>
            <span class="header-nav__menu-sub"></span>
            <ul>
              <li>
                <a href="">Danh sách cán bộ</a>
              </li>
              <li>
                <a href="">Thêm mới cán bộ</a>
              </li>
            </ul>
          </li>
          <li class="header-nav__menu-item">
            <a href="">
              <i class="fa-solid fa-user"></i>Quản lý phạm nhân
            </a>
            <span class="header-nav__menu-sub"></span>
            <ul>
              <li>
                <a href="">Thêm mới phạm nhân</a>
              </li>
              <li>
                <a href="">Danh sách phạm nhân</a>
              </li>
            </ul>
          </li>
          <li class="header-nav__menu-item active">
            <a href="">
              <i class="fa-solid fa-phone"></i>Quản lý lịch gọi
            </a>
            <span class="header-nav__menu-sub active"></span>
            <ul>
              <li>
                <a href="">Tạo mới lịch gọi</a>
              </li>
              <li>
                <a href="">Danh sách gọi video</a>
              </li>
            </ul>
          </li>
          <li class="header-nav__menu-item">
            <a href="">
              <i class="fa-solid fa-gear"></i>Cài đặt
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default SideBarComponent;
