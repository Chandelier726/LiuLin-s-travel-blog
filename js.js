// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
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
    
    // 城市数据
    const citiesData = {
        shanghai: {
            name: "上海",
            subtitle: "东方明珠，现代与传统交融",
            description: "上海，中国最大的经济中心，国际化大都市。既有外滩的百年历史建筑，也有陆家嘴的现代化摩天大楼。这座城市完美融合了东方传统文化与西方现代文明。",
            attractions: [
                { name: "外滩", icon: "fa-building" },
                { name: "东方明珠塔", icon: "fa-tower" },
                { name: "南京路步行街", icon: "fa-store" },
                { name: "豫园", icon: "fa-tree" },
                { name: "法租界", icon: "fa-archway" },
                { name: "迪士尼乐园", icon: "fa-hat-wizard" }
            ],
            tips: "建议安排3-4天游览上海。第一天可游览外滩、南京路步行街；第二天参观豫园、城隍庙；第三天探索法租界区域；第四天可前往迪士尼乐园或朱家角古镇。上海地铁系统发达，是出行的最佳选择。"
        },
        nanjing: {
            name: "南京",
            subtitle: "六朝古都，历史与现代交织",
            description: "南京，中国四大古都之一，拥有超过2500年建城史。这里既有中山陵的庄严雄伟，也有夫子庙的热闹繁华；既有明城墙的历史厚重，也有玄武湖的自然宁静。",
            attractions: [
                { name: "中山陵", icon: "fa-monument" },
                { name: "夫子庙", icon: "fa-temple" },
                { name: "明孝陵", icon: "fa-landmark" },
                { name: "玄武湖", icon: "fa-water" },
                { name: "南京博物院", icon: "fa-museum" },
                { name: "秦淮河", icon: "fa-water" }
            ],
            tips: "南京适合安排2-3天游览。第一天参观中山陵、明孝陵；第二天游览夫子庙、秦淮河；第三天可前往南京博物院和玄武湖。春秋两季是南京最美的季节，尤其是秋天的栖霞山红叶。"
        },
        xian: {
            name: "西安",
            subtitle: "千年古都，丝绸之路起点",
            description: "西安，世界四大古都之一，中国历史上建都朝代最多、时间最长的城市。这里保存着完整的古城墙，更有震撼世界的秦始皇兵马俑，是中华文明的发祥地之一。",
            attractions: [
                { name: "兵马俑", icon: "fa-user-ninja" },
                { name: "西安城墙", icon: "fa-fort-awesome" },
                { name: "大雁塔", icon: "fa-tower" },
                { name: "回民街", icon: "fa-utensils" },
                { name: "钟鼓楼", icon: "fa-bell" },
                { name: "大唐不夜城", icon: "fa-city" }
            ],
            tips: "建议安排3天游览西安。第一天参观兵马俑博物馆；第二天游览西安城墙、钟鼓楼和回民街；第三天参观大雁塔和大唐不夜城。西安美食丰富，一定要品尝当地的羊肉泡馍、肉夹馍和凉皮。"
        }
    };
    
    // 城市卡片点击事件
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('click', function() {
            const cityId = this.getAttribute('data-city');
            const cityData = citiesData[cityId];
            
            // 更新模态框内容
            document.getElementById('modalCityName').textContent = cityData.name;
            document.getElementById('modalCitySubtitle').textContent = cityData.subtitle;
            document.getElementById('cityDescription').textContent = cityData.description;
            document.getElementById('cityTips').textContent = cityData.tips;
            
            // 更新景点列表
            const attractionsList = document.getElementById('cityAttractions');
            attractionsList.innerHTML = '';
            
            cityData.attractions.forEach(attraction => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas ${attraction.icon}"></i> ${attraction.name}`;
                attractionsList.appendChild(li);
            });
            
            // 更新模态框样式
            const modal = document.getElementById('cityModal');
            modal.className = `modal ${cityId}`;
            
            // 显示模态框
            document.getElementById('modalOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // 关闭模态框
    document.getElementById('modalClose').addEventListener('click', function() {
        document.getElementById('modalOverlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击模态框外部关闭
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            document.getElementById('modalOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 卡片按钮点击事件（阻止冒泡，避免触发卡片点击事件）
    document.querySelectorAll('.city-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.city-card');
            card.click();
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
    
    console.log('三城记旅行博客已加载完成！');
});
