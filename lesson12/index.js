const contents = document.getElementById('js-contents');
const button = document.createElement('button');

const displayLoadingImage = () => {
    const loadingImage = document.createElement('img');
    loadingImage.id = 'loadingImageId';
    loadingImage.src = './loading-circle.gif';
    contents.appendChild(loadingImage);
}

const removeLoadingImage = () => {
    const loadingImage = document.getElementById('loadingImageId');
    loadingImage.remove();
}

const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
};

const init = async () => {
    displayLoadingImage();
    removeButton();
    try {
        const { data } = await getData("https://myjson.dit.upm.es/api/bins/edwr");
        if (data.length === 0) {
            errorText(`エラーが発生しました: 詳細 data is empty`);
            return;
        }
        createList(data);
    } catch (e) {
        errorText(`エラーが発生しました: 詳細 ${e}`);
    }
    removeLoadingImage();
}

const errorText = (text) => {
    const errorText = document.createElement('p');
    contents.replaceWith(errorText);
    errorText.textContent = text;
}

const createList = (lists) => {
    const frag = new DocumentFragment();
    const ul = document.createElement('ul');
    for(const list of lists) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = list.a;
        const img = document.createElement('img');
        img.src = list.img;
        img.alt = list.alt;
        const text = document.createTextNode(list.text);

        a.appendChild(img);
        a.appendChild(text);
        frag.appendChild(li).appendChild(a);
    }
    contents.appendChild(ul).appendChild(frag);
}

const displayButton = () => {
    button.textContent = 'クリックしたら表示されます';
    contents.appendChild(button);
    button.addEventListener('click', init)
}
const removeButton = () => {
    button.remove();
}
displayButton();
