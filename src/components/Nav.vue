<template>
    <nav class="header__navbar">
        <ul class="header__navbar-list">
            <li class="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">Vào cửa hàng trên ứng dụng F8-Shop
                <div class="header__qr">
                    <img src="@/assets/img/qr.png" alt="QR code" class="header__qr-img">
                    <div class="header__qr-apps">
                        <a href="" class="header__qr-link">
                            <img src="@/assets/img/google_paly.png" alt="Google Play" class="header__qr-download-img">
                        </a>
                        <a href="" class="header__qr-link">
                            <img src="@/assets/img/app_store.png" alt="App Store" class="header__qr-download-img">
                        </a>
                    </div>
                </div>
            </li>
            <li class="header__navbar-item">
                <span class="header__navbar-item--pointer"> Kết nối</span>
                <a href="" class="header__navbar-icon-link">
                    <i class="header__navbar-icon fab fa-facebook"></i>
                </a>
                <a href="" class="header__navbar-icon-link">
                    <i class="header__navbar-icon fab fa-instagram"></i>
                </a>
            </li>
        </ul>
        <ul class="header__navbar-list">
            <li class="header__navbar-item header__navbar-item--has-qr">
                <a class="header__navbar-item-link" href="">
                    <i class="header__navbar-icon far fa-bell"></i> Thông báo
                </a>
                <div class="header__notify">
                    <header class="header__notyfi-header">
                        <h3>Thông báo mới nhận</h3>
                    </header>
                    <ul class="header__notyfi-list">
                        <!-- <li class="header__notify-item">
                            <a class="header__notyfi-link">
                                    <img src="@/assets/img/notify1.jpeg" alt="" class="header__notyfi-img">
                                <div class="header__notyfi-info">
                                    <span class="header__notyfi-name">Mỹ phẩm Ohui chính hãng
                                    </span>
                                    <span class="header__notyfi-description">Mô tả sản phảm chính hãng</span>
                                </div>
                            </a>
                        </li> -->
                        <ListOfCarts :Description="true"></ListOfCarts>
                    </ul>
                    <footer class="header__notify-footer">
                        <a href="" class="header__notify--footer-btn"><span>Xem tất cả</span></a>
                    </footer>
                </div>
            </li>
            <li class="header__navbar-item">
                <a class="header__navbar-item-link">
                    <i class="header__navbar-icon far fa-question-circle"></i> Trợ giúp</a>
            </li>

            <!-- user khi dang nhap -->
            <!-- <li class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng kí</li>
            <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li> -->
            <li class="header__navbar-item header__navbar-user">
                <img src="@/assets/img/user.png" alt="" class="header__navbar-user-img">
                <span class="header__navbar-user-name">Quốc Thịnh</span>
                <ul class="header__navbar-user-menu">
                    <li class="header__navbar-user-item">
                        <a href="">Tài khoản của tôi</a>
                    </li>
                    <li class="header__navbar-user-item">
                        <a href="">Địa chỉ của tôi</a>
                    </li>
                    <li class="header__navbar-user-item">
                        <a href="">Đơn mua</a>
                    </li>
                    <li class="header__navbar-user-item header__navbar-user-item-separate">
                        <a href="">Đăng xuất</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
import ListOfCarts from "../components/ListOfCart"
export default {
    components :{
        ListOfCarts
    }
}
</script>

