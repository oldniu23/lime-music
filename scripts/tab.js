// tab切换
// 1.拿到点击事件 判断是否点击的tab 是就继续 不是就返回
// 2.移除所有active 给点击的加上active
// 3.view拿到.xxx-view（点击的元素）  找到其父元素 遍历把所有子元素隐藏 然后把点击的元素显示
document.addEventListener('click', function(event){
    let target = event.target;
    console.log(target);
    console.log(target.classList,"???????");

    if(target.dataset.role !== 'tab') {
        return;
    }

    // 移除所有active
    [].forEach.call(target.parentElement.children, tab => {
        tab.classList.remove('active');
    })
    // 给点击的加上active
    target.classList.add('active');
    let content = document.querySelector(target.dataset.view)
    
    // 先隐藏全部 再显示选中 
    if(content) {
        [].forEach.call(content.parentElement.children, child => {
            child.style.display = 'none'
        })
        content.style.display = 'block';
    }
})