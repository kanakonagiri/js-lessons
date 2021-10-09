const ul = document.getElementById('js-lists');

const listData = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
]

function displayLoadingImage () {
    const loadingImage = document.createElement('img');
    loadingImage.id = 'loadingImageId';
    loadingImage.src = './loading-circle.gif';
    ul.appendChild(loadingImage);
}

function removeLoadingImage () {
    const loadingImage = document.getElementById('loadingImageId');
    loadingImage.remove();
}

async function getListData() {
    return new Promise(resolve => {
        displayLoadingImage ();
        setTimeout(() => {
            resolve(listData);
        }, 3000);
    });
}

async function tryGetData() {
    try {
        return await getListData();
    } catch (error) {
        const errorText = document.createElement('p');
        ul.replaceWith(errorText);
        errorText.textContent = "エラーが発生しました";
    } finally {
        removeLoadingImage ();
    }
}

async function createLists() {
    const frag = new DocumentFragment();
    const value = await tryGetData();
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
