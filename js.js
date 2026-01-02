// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('三城记旅行博客已加载');
    
    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // 切换菜单图标
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    // 点击导航链接时关闭移动菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
            
            // 更新活动链接
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // 更新导航链接活动状态
        updateActiveNavLink();
        
        // 显示/隐藏返回顶部按钮
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // 返回顶部功能
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 更新活动导航链接
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // 初始化
    updateActiveNavLink();
    
    // 城市卡片悬停效果
    document.querySelectorAll('.highlight-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 贴士卡片悬停效果
    document.querySelectorAll('.tip-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 城市标签点击效果
    document.querySelectorAll('.city-tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 平滑滚动到目标位置
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // 更新导航链接活动状态
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                document.querySelector(`.nav-links a[href="${targetId}"]`).classList.add('active');
            }
        });
    });
    
    // 添加表格行悬停效果
    document.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e8f4fc';
        });
        
        row.addEventListener('mouseleave', function() {
            if (this.rowIndex % 2 === 0) {
                this.style.backgroundColor = '#f8f9fa';
            } else {
                this.style.backgroundColor = 'white';
            }
        });
    });
    
    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 添加点击特效
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function(e) {
            // 防止在移动设备上触发多次点击
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                        
                        // 更新导航链接
                        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                        document.querySelector(`.nav-links a[href="${href}"]`).classList.add('active');
                    }
                }
            }
        });
    });
    
    console.log('交互功能已初始化');
});
