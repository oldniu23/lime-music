(function() {
    // 实例化 对象包括html元素和需要加进去的图片
    let slider = new Slider(
        {
            el: document.querySelector('#slider'),
            slides: [
                {link: '#1', image: 'images/1.png'},
                {link: '#2', image: 'images/2.png'},
                {link: '#3', image: 'images/3.png'},
                {link: '#4', image: 'images/4.png'},
                {link: '#5', image: 'images/5.png'}
            ]
        }
    );
    // 放到全局
    window.slider = slider;

})()