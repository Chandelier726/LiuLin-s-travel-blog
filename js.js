// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('旅行博客网页已加载');
    
    // 1. 页面加载动画
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1500);
    
    // 2. 移动端菜单切换
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    // 点击导航链接时关闭移动菜单
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
            
            // 更新活动链接状态
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 3. 滚动时添加头部阴影和返回顶部按钮
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        // 头部阴影
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 返回顶部按钮
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // 更新导航链接活动状态
        updateActiveNavLink();
    });
    
    // 返回顶部功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 4. 目的地卡片点击事件
    const cardButtons = document.querySelectorAll('.card-btn');
    const modal = document.getElementById('destinationModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    // 目的地数据
    const destinations = {
        kyoto: {
            title: "日本京都",
            category: "文化之旅",
            rating: 4.5,
            description: "京都是日本文化的精髓所在，拥有超过1000座寺庙和数百个庭院。这座城市完美地融合了传统与现代，从清水寺的壮丽景色到哲学之道的宁静漫步，每一处都令人难忘。",
            highlights: ["金阁寺", "清水寺", "伏见稻荷大社", "岚山竹林"],
            tips: ["春季赏樱最佳", "尝试传统和服体验", "品尝怀石料理"],
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        iceland: {
            title: "冰岛极光",
            category: "自然奇观",
            rating: 4.0,
            description: "冰岛是一个充满自然奇迹的国家，从壮观的瀑布和冰川到活跃的火山和地热温泉。冬季是追逐北极光的最佳时节，而夏季则可以体验午夜阳光的奇妙。",
            highlights: ["黄金圈", "蓝湖温泉", "杰古沙龙冰河湖", "黑沙滩"],
            tips: ["9月至4月适合看极光", "租用四驱车自驾", "准备防风防水衣物"],
            image: "https://images.unsplash.com/photo-1502741338009-5b3f2ae63d2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        italy: {
            title: "意大利托斯卡纳",
            category: "田园风光",
            rating: 5.0,
            description: "托斯卡纳是意大利最迷人的地区之一，以其连绵起伏的丘陵、葡萄园、橄榄园和文艺复兴时期的艺术遗产而闻名。这里的田园风光仿佛一幅幅生动的油画。",
            highlights: ["佛罗伦萨", "锡耶纳", "圣吉米尼亚诺", "基安蒂葡萄酒产区"],
            tips: ["5-6月和9-10月最佳", "品尝当地葡萄酒和松露", "参观文艺复兴艺术"],
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
    };
    
    // 卡片点击事件
    cardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destinationId = this.getAttribute('data-destination');
            const destination = destinations[destinationId];
            
            if (destination) {
                // 构建模态框内容
                let modalHTML = `
                    <div class="destination-modal">
                        <div class="destination-header">
                            <img src="${destination.image}" alt="${destination.title}" class="destination-image">
                            <div class="destination-overlay">
                                <h2>${destination.title}</h2>
                                <div class="destination-meta">
                                    <span class="destination-category">${destination.category}</span>
                                    <div class="destination-rating">
                                        ${getRatingStars(destination.rating)}
                                        <span>${destination.rating}/5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="destination-content">
                            <h3>目的地介绍</h3>
                            <p>${destination.description}</p>
                            
                            <div class="destination-details">
                                <div class="detail-column">
                                    <h4><i class="fas fa-star"></i> 亮点推荐</h4>
                                    <ul>
                                        ${destination.highlights.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="detail-column">
                                    <h4><i class="fas fa-lightbulb"></i> 旅行贴士</h4>
                                    <ul>
                                        ${destination.tips.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <button class="btn btn-primary" id="planTripBtn">计划我的旅程</button>
                        </div>
                    </div>
                `;
                
                modalBody.innerHTML = modalHTML;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // 计划旅程按钮事件
                document.getElementById('planTripBtn')?.addEventListener('click', function() {
                    alert(`开始计划您的${destination.title}之旅！`);
                });
            }
        });
    });
    
    // 关闭模态框
    modalClose.addEventListener('click', function() {
        closeModal();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // 生成评分星星
    function getRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // 5. 目的地筛选器
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新活动按钮
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // 筛选卡片
            cards.forEach(card => {
                const category = card.querySelector('.card-category').textContent;
                const categoryMap = {
                    '文化之旅': 'culture',
                    '自然奇观': 'nature',
                    '田园风光': 'adventure',
                    '城市探索': 'food'
                };
                
                if (filter === 'all' || categoryMap[category] === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // 6. 统计数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element, target) {
        const duration = 2000; // 动画持续时间（毫秒）
        const step = target / (duration / 16); // 每16ms增加的值（约60fps）
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // 当统计区域进入视口时触发动画
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // 7. 技能条动画
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillLevels.forEach(level => {
                    const width = level.style.width;
                    level.style.width = '0';
                    setTimeout(() => {
                        level.style.width = width;
                    }, 300);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        skillsObserver.observe(aboutSection);
    }
    
    // 8. 加载更多图片功能
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const galleryContainer = document.querySelector('.gallery-container');
    
    // 更多图片数据
    const moreImages = [
        {
            src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "瑞士阿尔卑斯",
            location: "瑞士 · 因特拉肯"
        },
        {
            src: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "泰国清迈",
            location: "泰国 · 清迈"
        },
        {
            src: "https://images.unsplash.com/photo-1506970845872-504d6b2d49e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "美国大峡谷",
            location: "美国 · 亚利桑那"
        },
        {
            src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "印度泰姬陵",
            location: "印度 · 阿格拉"
        }
    ];
    
    loadMoreBtn.addEventListener('click', function() {
        // 添加新图片
        moreImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.title}">
                <div class="gallery-overlay">
                    <h3>${image.title}</h3>
                    <p>${image.location}</p>
                </div>
            `;
            galleryContainer.appendChild(galleryItem);
        });
        
        // 禁用按钮并更改文本
        this.textContent = '已加载全部图片';
        this.disabled = true;
        this.classList.remove('btn-secondary');
        this.classList.add('btn-primary');
        
        // 重新绑定新图片的悬停效果
        initGalleryHover();
    });
    
    // 9. 联系表单提交
    const contactForm = document.getElementById('contactForm');
    const contactBtn = document.getElementById('contactBtn');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有字段！');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('请输入有效的邮箱地址！');
            return;
        }
        
        // 模拟表单提交
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(`感谢 ${name} 的留言！我们会尽快通过 ${email} 与您联系。`);
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // 邮箱验证函数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // 点击关于我的联系按钮时滚动到联系表单
    contactBtn.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // 10. 更新活动导航链接
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // 11. 初始化画廊悬停效果
    function initGalleryHover() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    }
    
    // 初始化画廊效果
    initGalleryHover();
    
    // 12. 添加一些随机效果
    // 随机改变卡片颜色
    const cardCategories = document.querySelectorAll('.card-category');
    const categoryColors = {
        '文化之旅': '#3498db',
        '自然奇观': '#2ecc71',
        '田园风光': '#9b59b6',
        '城市探索': '#e74c3c'
    };
    
    cardCategories.forEach(category => {
        const text = category.textContent;
        if (categoryColors[text]) {
            category.style.backgroundColor = categoryColors[text];
        }
    });
    
    // 添加一些有趣的鼠标跟随效果
    const circles = document.querySelectorAll('.circle');
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        circles.forEach((circle, index) => {
            const speed = 0.05 + (index * 0.02);
            const x = (mouseX * 20 - 10) * speed;
            const y = (mouseY * 20 - 10) * speed;
            
            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});