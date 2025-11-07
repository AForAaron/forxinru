// 提示文字集合（对欣茹说的话）
const TIPS = [
    '欣茹，多喝水哦~',
    '欣茹，保持微笑呀',
    '欣茹，每天都要元气满满',
    '欣茹，记得吃水果',
    '欣茹，保持好心情',
    '欣茹，好好爱自己',
    '欣茹，我想你了',
    '欣茹，梦想成真',
    '欣茹，期待下一次见面',
    '欣茹，金榜题名',
    '欣茹，顺顺利利',
    '欣茹，早点休息',
    '欣茹，愿所有烦恼都消失',
    '欣茹，别熬夜',
    '欣茹，今天过得开心嘛',
    '欣茹，天冷了，多穿衣服',
    '我的欣茹，要照顾好自己',
    '欣茹，你笑起来最好看',
    '欣茹，记得按时吃饭',
    '欣茹，累了就休息一下',
    '欣茹，你是最棒的',
    '欣茹，要开心每一天'
];

// 背景色集合
const BG_COLORS = [
    'lightpink', 'skyblue', 'lightgreen',
    'lavender',
    'lightyellow', 'plum', 'coral', 'bisque',
    'aquamarine',
    'mistyrose', 'honeydew',
    'lavenderblush', 'oldlace'
];

// 背景色对应的文字颜色（对比色）映射
const TEXT_COLORS = {
    'lightpink': 'darkred',
    'skyblue': 'darkblue',
    'lightgreen': 'darkgreen',
    'lavender': 'purple',
    'lightyellow': 'darkorange',
    'plum': 'white',
    'coral': 'darkred',
    'bisque': 'darkorange',
    'aquamarine': 'darkcyan',
    'mistyrose': 'darkred',
    'honeydew': 'darkgreen',
    'lavenderblush': 'darkmagenta',
    'oldlace': 'darkgoldenrod'
};

// 获取对比文字颜色
function getTextColor(bgColor) {
    return TEXT_COLORS[bgColor] || 'black';
}

// 随机选择数组元素
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 创建弹窗
function createPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    // 随机选择背景色和文字颜色
    const bgColor = randomChoice(BG_COLORS);
    const textColor = getTextColor(bgColor);
    
    // 设置样式
    popup.style.backgroundColor = bgColor;
    popup.style.color = textColor;
    popup.textContent = randomChoice(TIPS);
    
    // 随机位置（确保在视口内）
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 60;
    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);
    
    popup.style.left = x + 'px';
    popup.style.top = y + 'px';
    
    // 点击关闭
    popup.addEventListener('click', () => {
        popup.classList.add('fade-out');
        setTimeout(() => popup.remove(), 300);
    });
    
    document.body.appendChild(popup);
    return popup;
}

// 主程序
let popups = [];
let isRunning = false;
let createInterval = null;
let stopTimeout = null;
let closeTimeout = null;

const startBtn = document.getElementById('startBtn');
const statusDiv = document.getElementById('status');

function updateStatus(message) {
    statusDiv.textContent = message;
}

function startPopups() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    startBtn.textContent = '运行中...';
    updateStatus('正在创建弹窗...');
    
    // 清除之前的弹窗
    popups.forEach(popup => {
        if (popup.parentNode) {
            popup.remove();
        }
    });
    popups = [];
    
    // 开始创建弹窗（每20ms一个）
    createInterval = setInterval(() => {
        const popup = createPopup();
        popups.push(popup);
    }, 20);
    
    // 30秒后停止创建新弹窗
    stopTimeout = setTimeout(() => {
        clearInterval(createInterval);
        updateStatus('已停止创建新弹窗，30秒后关闭所有弹窗...');
        
        // 再等30秒后关闭所有弹窗
        closeTimeout = setTimeout(() => {
            closeAllPopups();
        }, 30000);
    }, 30000);
}

function closeAllPopups() {
    // 清除所有定时器
    if (createInterval) clearInterval(createInterval);
    if (stopTimeout) clearTimeout(stopTimeout);
    if (closeTimeout) clearTimeout(closeTimeout);
    
    // 关闭所有弹窗（带淡出动画）
    popups.forEach((popup, index) => {
        setTimeout(() => {
            popup.classList.add('fade-out');
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.remove();
                }
            }, 300);
        }, index * 10); // 错开关闭时间，形成波浪效果
    });
    
    // 重置状态
    setTimeout(() => {
        popups = [];
        isRunning = false;
        startBtn.disabled = false;
        startBtn.textContent = '开始弹窗';
        updateStatus('已完成！可以再次点击开始。');
    }, 1000);
}

// 绑定按钮事件
startBtn.addEventListener('click', startPopups);

// 页面加载完成提示
updateStatus('点击按钮开始弹窗');

