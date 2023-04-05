let mainImgs = ['./img/style1.png','./img/style2.jpg', './img/style3.jpg'];
let mainDesc = ['MONEUF', 'MARI STEIGER', 'LUMI']
let currentIndex = 0;

function changeImg() {
    let image = document.getElementById('main-img');
    image.src = mainImgs[currentIndex];
    currentIndex = (currentIndex + 1) % mainImgs.length;
    setTimeout(changeImg, 1000)
}

function changeDesc(){
    let desc = document.querySelector('.main-item-desc');
    desc.textContent = mainDesc[currentIndex];
    currentIndex = (currentIndex + 1) % mainDesc.length;
    setTimeout(changeDesc, 1000)
}



setTimeout(changeImg, 1000, changeDesc);