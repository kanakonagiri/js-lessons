const ul = document.getElementById('js-lists');

const listData = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
]

const displayLoadingImage = () => {
    const loadingImage = document.createElement('img');
    loadingImage.id = 'loadingImageId';
    loadingImage.src = './loading-circle.gif';
    ul.appendChild(loadingImage);
}

const removeLoadingImage = () => {
    const loadingImage = document.getElementById('loadingImageId');
    loadingImage.remove();
}

const getListData = async() => {
    return new Promise(resolve => {
        displayLoadingImage ();
        setTimeout(() => {
            resolve(listData);
        }, 3000);
    });
}

const getData = async() => {
    try {
        return await getListData();
    } catch (error) {
        errorText("エラーが発生しました");
        return error;
    } finally {
        removeLoadingImage ();
    }
}

const errorText = (text) => {
    const errorText = document.createElement('p');
    ul.replaceWith(errorText);
    errorText.textContent = text;
}

const init = async () => {
    const value = await getData();
    if (value.length) {
        createList(value);
    } else {
        errorText("値が入ってません");
    }
}
init();

const createList = (value) => {
    const frag = new DocumentFragment();
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
