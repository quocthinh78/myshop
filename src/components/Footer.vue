<template>
    <div>
        <footer class="footer">
            <div class="grid">
                <div class="grid__row">
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">
                            Chăm sóc khách hàng
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trung Tâm Trợ Giúp</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">TickID Mail</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">Hưỡng Dẫn Mua Hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">
                            Giới thiệu
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Tuyển Dụng</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">Mua Hàng</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">Điều Khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">
                            Danh mục
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trang Điểm Mặt</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">Trang Điểm Môi</a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">Đồ Gia Dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">
                            Theo dõi chúng tôi trên
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">
                                <i class="footer-item__icon fab fa-instagram"></i> Instagram
                            </a>
                            </li>
                            <li class="footer-item">
                            <a href="" class="footer-item__link">
                                <i class="footer-item__icon  fab fa-linkedin"></i>LikedIn
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">
                            Tải ứng dụng
                        </h3>
                        <div class="footer__download">
                            <img src="@/assets/img/qr.png" alt="" class="footer__download-qr">
                            <div class="footer__download-apps">
                                <a href="" class="footer__download-app-link">
                                    <img src="@/assets/img/google_paly.png" alt="Google play" class="footer_downlaod-app-img">
                                </a>
                                <a href="" class="footer__download-app-link">
                                    <img src="@/assets/img/app_store.png" alt="App store" class="footer_downlaod-app-img">
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="grid">
                    <div class="grid__row">
                        <p class="footer__text">©2021 - Bản quyền thuộc về MyCompany</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .footer {
    border-top: 4px solid var(--primary-color);
    padding-top: 16px;
    background-color: var(--text-white)
}

.footer__heading {
    font-size: 1.4rem;
    text-transform: uppercase;
}

.footer-list {
    padding-left: 0;
    list-style: none;
}

.footer-item__link {
    text-decoration: none;
    font-size: 1.3rem;
    color: #737373;
    padding: 6px 0;
    display: flex;
}

.footer-item__link:hover {
    color: var(--primary-color);
}

.footer-item__icon {
    font-size: 1.6rem;
    margin: -1px 6px 0 0;
}

.footer__download {
    display: flex;
}

.footer__download-qr {
    width: 80px;
    border: 1px solid var(--border-color);
}

.footer__download-apps {
    margin-left: 14px;
}

.footer_downlaod-app-img {
    height: 18px;
}

.footer__download-app-link {
    text-decoration: none;
    color: transparent;
}

.footer__bottom {
    margin-top: 32px;
    padding: 8px 0;
    background-color: #f5f5f5;
}

p.footer__text {
    font-size: 1.4rem;
    font-weight: 600;
    color: #737373;
    text-align: center;
    margin: 12px auto;
}
</style>