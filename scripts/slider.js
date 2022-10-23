// 轮播组件
// 1.拿到包含html元素的对象 2.渲染：创建子元素当作容器 获取轮播图数量转变成容器宽度 3.往子元素中插入孙子元素
// 4.定时轮播
class Slider {
    constructor(options = {}) {
        // 拿到对象中的html元素和slides(图片链接等)
        this.$el = options.el; 
        this.slides = options.slides;
        this.render();


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
}