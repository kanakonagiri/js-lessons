const ul = document.getElementById('js-lists');

const listData = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
]

const myPromise = new Promise((resolve, reject) => {
    const lodingImage = document.createElement('img');
    lodingImage.src = './loading-circle.gif';
    ul.appendChild(lodingImage);
    setTimeout(() => {
        reject('エラーが発生しました。');
    }, 3000);
});
myPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});