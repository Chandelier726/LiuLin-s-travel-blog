// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('三城漫记旅行博客已加载');
    
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
    
    // 英雄区域轮播图
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // 自动轮播
    setInterval(nextSlide, 5000);
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
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
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 特色亮点标签切换
    const highlightTabs = document.querySelectorAll('.highlight-tab');
    const highlightContents = document.querySelectorAll('.highlight-content');
    
    highlightTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有活动状态
            highlightTabs.forEach(t => t.classList.remove('active'));
            highlightContents.forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 贴士卡片悬停效果
    document.querySelectorAll('.tip-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 城市数据
    const citiesData = {
        shanghai: {
            name: "上海",
            subtitle: "现代与传统交融的国际化都市",
            description: "上海是中国最大的经济中心，国际化大都市。既有外滩的百年历史建筑，也有陆家嘴的现代化摩天大楼。这座城市完美融合了东方传统文化与西方现代文明。",
            attractions: [
                "外滩 - 万国建筑群，夜景璀璨",
                "豫园城隍庙 - 古典园林与热闹市场",
                "陆家嘴 - 现代化摩天大楼群",
                "法租界 - 梧桐树下的老洋房",
                "南京路步行街 - 购物天堂",
                "迪士尼乐园 - 童话世界"
            ],
            foods: [
                "小笼包 - 皮薄汁多，鲜美无比",
                "生煎包 - 底部酥脆，肉馅鲜美",
                "本帮菜 - 浓油赤酱，口味偏甜",
                "蟹粉豆腐 - 鲜美滑嫩，秋季最佳"
            ],
            tips: "建议安排3-4天游览上海。第一天可游览外滩、南京路步行街；第二天参观豫园、城隍庙；第三天探索法租界区域；第四天可前往迪士尼乐园或朱家角古镇。上海地铁系统发达，是出行的最佳选择。"
        },
        nanjing: {
            name: "南京",
            subtitle: "六朝古都的历史文化名城",
            description: "南京，中国四大古都之一，拥有超过2500年建城史。这里既有中山陵的庄严雄伟，也有夫子庙的热闹繁华；既有明城墙的历史厚重，也有玄武湖的自然宁静。南京是一座值得慢慢品味的城市。",
            attractions: [
                "中山陵 - 孙中山先生的陵寝，庄严肃穆",
                "夫子庙秦淮河 - 古色古香，夜景迷人",
                "明孝陵 - 明朝开国皇帝朱元璋的陵墓",
                "玄武湖 - 城市中的天然湖泊，风景优美",
                "南京博物院 - 丰富的文物收藏",
                "栖霞山 - 秋季红叶美不胜收"
            ],
            foods: [
                "盐水鸭 - 皮白肉嫩，咸香可口",
                "鸭血粉丝汤 - 南京特色小吃，鲜美暖胃",
                "桂花鸭 - 秋季时令，桂花香气独特",
                "秦淮八绝 - 八种传统点心，风味各异"
            ],
            tips: "南京适合安排2-3天游览。第一天参观中山陵、明孝陵；第二天游览夫子庙、秦淮河；第三天可前往南京博物院和玄武湖。春秋两季是南京最美的季节，尤其是秋天的栖霞山红叶。"
        },
        xian: {
            name: "西安",
            subtitle: "千年古都的历史文化宝库",
            description: "西安，世界四大古都之一，中国历史上建都朝代最多、时间最长的城市。这里保存着完整的古城墙，更有震撼世界的秦始皇兵马俑，是中华文明的发祥地之一。",
            attractions: [
                "兵马俑博物馆 - 世界第八大奇迹",
                "西安古城墙 - 中国现存最完整的古代城垣",
                "回民街 - 美食聚集地，吃货天堂",
                "大雁塔 - 唐代佛教建筑，历史遗迹",
                "钟鼓楼 - 西安市中心的地标建筑",
                "大唐不夜城 - 唐代文化主题街区"
            ],
            foods: [
                "肉夹馍 - 腊汁肉配白吉馍，西安名片",
                "凉皮 - 爽滑可口，酸辣开胃",
                "羊肉泡馍 - 汤浓肉烂，香气四溢",
                "biangbiang面 - 宽如裤带，口感劲道"
            ],
            tips: "建议安排3天游览西安。第一天参观兵马俑博物馆；第二天游览西安城墙、钟鼓楼和回民街；第三天参观大雁塔和大唐不夜城。西安美食丰富，一定要品尝当地的羊肉泡馍、肉夹馍和凉皮。"
        }
    };
    
    // 城市卡片点击事件
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('click', function() {
            const cityId = this.getAttribute('data-city');
            const cityData = citiesData[cityId];
            
            if (cityData) {
                // 更新模态框内容
                document.getElementById('modalCityName').textContent = cityData.name;
                document.getElementById('modalCitySubtitle').textContent = cityData.subtitle;
                document.getElementById('modalCityDescription').textContent = cityData.description;
                document.getElementById('modalTips').textContent = cityData.tips;
                
                // 更新景点列表
                const attractionsList = document.getElementById('modalAttractions');
                attractionsList.innerHTML = '';
                cityData.attractions.forEach(attraction => {
                    const li = document.createElement('li');
                    li.textContent = attraction;
                    attractionsList.appendChild(li);
                });
                
                // 更新美食列表
                const foodsList = document.getElementById('modalFoods');
                foodsList.innerHTML = '';
                cityData.foods.forEach(food => {
                    const li = document.createElement('li');
                    li.textContent = food;
                    foodsList.appendChild(li);
                });
                
                // 更新模态框头部颜色
                const modalHeader = document.querySelector('.modal-header');
                if (cityId === 'shanghai') {
                    modalHeader.style.background = 'linear-gradient(135deg, var(--shanghai-blue), var(--shanghai-light))';
                } else if (cityId === 'nanjing') {
                    modalHeader.style.background = 'linear-gradient(135deg, var(--nanjing-orange), var(--nanjing-light))';
                } else if (cityId === 'xian') {
                    modalHeader.style.background = 'linear-gradient(135deg, var(--xian-purple), var(--xian-light))';
                }
                
                // 显示模态框
                document.getElementById('cityModal').style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // 关闭模态框
    const modalClose = document.getElementById('modalClose');
    const cityModal = document.getElementById('cityModal');
    
    modalClose.addEventListener('click', function() {
        cityModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击模态框外部关闭
    cityModal.addEventListener('click', function(e) {
        if (e.target === this) {
            cityModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 更新导航链接活动状态
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('所有交互功能已初始化');
});
