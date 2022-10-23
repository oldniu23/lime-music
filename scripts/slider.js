// 轮播组件
// 1.拿到包含html元素的对象 2.渲染：创建子元素当作容器 获取轮播图数量转变成容器宽度 3.往子元素中插入孙子元素
// 4.定时轮播
class Slider {
    constructor(options = {}) {
        // 拿到对象中的html元素和slides(图片链接等)
        this.$el = options.el; 
        this.slides = options.slides;
        // 切换时间
        this.time = options.time || 3000;
        // 记录第几张图片
        this.index = 0;
        // 渲染html
        this.render();
        // 开始轮播
        this.start();

    }
    // 渲染
    render() {
        // 插入一个div
        this.$el.innerHTML = `<div class="qq-slider-wrap"></div>`
        // 获取元素的第一个子元素并起个别名
        this.$wrap = this.$el.firstElementChild;
        // 设置宽度
        this.$wrap.style.width = `${this.slides.length * 100}%`;
        // 遍历需要渲染的slides并放入父元素中
        this.$wrap.innerHTML =  this.slides.map(slide => 
            `<div class="qq-slider-item">
                <a href="${slide.link}">
                    <img src="${slide.image}">
                </a>            
             </div>`
        ).join('')
    }

    start() {  
        // 计时器
        setInterval(this.next.bind(this), this.time);
      }

    next() {
        // 每次往左偏移trans
        this.index += 1;
        if( this.index === this.slides.length){ this.index = 0};
        let trans = `-${this.index * 100 / this.slides.length}%`; 
        this.$wrap.style.transform = `translate(${trans})`;
    }
}