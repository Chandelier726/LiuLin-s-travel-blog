/* 基础样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans SC', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* 导航栏 */
header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2c3e50;
    display: flex;
    align-items: center;
}

.logo i {
    color: #3498db;
    margin-right: 8px;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-links a:hover, .nav-links a.active {
    color: #3498db;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s;
}

.nav-links a:hover::after, .nav-links a.active::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #2c3e50;
    cursor: pointer;
}

/* 英雄区域 */
.hero {
    padding: 150px 0 80px;
    background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
    color: white;
    text-align: center;
    margin-top: 60px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
    opacity: 0.9;
}

/* 城市卡片区域 */
.cities {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 50px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #3498db;
    margin: 10px auto 0;
    border-radius: 2px;
}

.city-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.city-card {
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.city-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.city-card.shanghai .city-header {
    background-color: #3498db;
}

.city-card.nanjing .city-header {
    background-color: #e67e22;
}

.city-card.xian .city-header {
    background-color: #9b59b6;
}

.city-header {
    padding: 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.city-name {
    font-size: 1.8rem;
    font-weight: 700;
}

.city-icon {
    font-size: 2.5rem;
    opacity: 0.9;
}

.city-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.city-content {
    padding: 25px;
}

.city-desc {
    color: #555;
    margin-bottom: 20px;
    line-height: 1.7;
}

.city-features {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 25px;
}

.feature-tag {
    background-color: #f1f8ff;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #3498db;
}

.shanghai .feature-tag {
    background-color: #e8f4fc;
    color: #2980b9;
}

.nanjing .feature-tag {
    background-color: #fef5e7;
    color: #d35400;
}

.xian .feature-tag {
    background-color: #f4ecf7;
    color: #8e44ad;
}

.city-btn {
    display: inline-block;
    padding: 10px 25px;
    background-color: #f8f9fa;
    border: 2px solid #3498db;
    color: #3498db;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    text-align: center;
    width: 100%;
}

.shanghai .city-btn {
    border-color: #3498db;
    color: #3498db;
}

.shanghai .city-btn:hover {
    background-color: #3498db;
    color: white;
}

.nanjing .city-btn {
    border-color: #e67e22;
    color: #e67e22;
}

.nanjing .city-btn:hover {
    background-color: #e67e22;
    color: white;
}

.xian .city-btn {
    border-color: #9b59b6;
    color: #9b59b6;
}

.xian .city-btn:hover {
    background-color: #9b59b6;
    color: white;
}

/* 城市详情模态框 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 20px;
}

.modal {
    background-color: white;
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: modalFade 0.3s;
}

@keyframes modalFade {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: #7f8c8d;
    cursor: pointer;
    z-index: 10;
}

.modal-header {
    padding: 30px 30px 20px;
    color: white;
    border-radius: 15px 15px 0 0;
}

.modal.shanghai .modal-header {
    background-color: #3498db;
}

.modal.nanjing .modal-header {
    background-color: #e67e22;
}

.modal.xian .modal-header {
    background-color: #9b59b6;
}

.modal-title {
    font-size: 2.2rem;
    margin-bottom: 10px;
}

.modal-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}

.modal-body {
    padding: 30px;
}

.modal-section {
    margin-bottom: 30px;
}

.modal-section h3 {
    font-size: 1.4rem;
    color: #2c3e50;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f1f1f1;
}

.modal-section p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 15px;
}

.attraction-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
}

.attraction-list li {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
}

.attraction-list i {
    margin-right: 10px;
    color: #3498db;
}

.shanghai .attraction-list i {
    color: #3498db;
}

.nanjing .attraction-list i {
    color: #e67e22;
}

.xian .attraction-list i {
    color: #9b59b6;
}

/* 旅行贴士 */
.tips {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.tips-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.tip-card {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
}

.tip-card:hover {
    transform: translateY(-5px);
}

.tip-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #3498db;
}

.tip-card h3 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 15px;
}

.tip-card p {
    color: #666;
}

/* 页脚 */
footer {
    background-color: #2c3e50;
    color: white;
    padding: 50px 0 20px;
    text-align: center;
}

.footer-logo {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-logo i {
    color: #3498db;
    margin-right: 8px;
}

.footer-desc {
    max-width: 600px;
    margin: 0 auto 30px;
    color: #bdc3c7;
    line-height: 1.7;
}

.footer-bottom {
    padding-top: 20px;
    border-top: 1px solid #34495e;
    color: #95a5a6;
    font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 992px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .city-cards {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        flex-direction: column;
        padding: 20px 0;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .nav-links li {
        margin: 10px 0;
        text-align: center;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .hero {
        padding: 130px 0 60px;
    }
    
    .hero h1 {
        font-size: 2.2rem;
    }
    
    .city-cards {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 1.8rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .modal-body {
        padding: 20px;
    }
}
