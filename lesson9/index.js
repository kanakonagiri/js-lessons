const ul = document.getElementById('js-lists');

const listData = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
]

function displayLoadingImage () {
    const lodingImage = document.createElement('img');
    lodingImage.id = 'loadingImageId';
    lodingImage.src = './loading-circle.gif';
    ul.appendChild(lodingImage);
}

function removeLoadingImage () {
    const lodingImage = document.getElementById('loadingImageId');
    lodingImage.remove();
}

async function loadingPromise() {
    return new Promise(resolve => {
        displayLoadingImage ();
        setTimeout(() => {
            resolve(listData);
            removeLoadingImage ();
        }, 3000);
    });
}

async function createLists() {
    const frag = new DocumentFragment();
    const value = await loadingPromise();
    for(const list of value) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = list.to;
        const img = document.createElement('img');
        img.src = list.img;
        img.alt = list.alt;
        const text = document.createTextNode(list.text);

        a.appendChild(img);
        a.appendChild(text);
        li.appendChild(a);
        frag.appendChild(li);
    }
    ul.appendChild(frag);
}

createLists();
