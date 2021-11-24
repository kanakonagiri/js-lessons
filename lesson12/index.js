const ul = document.getElementById('js-lists');
const fetchButton = document.getElementById('fetchButton');

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
    try {
        const { data } = await getData("https://myjson.dit.upm.es/api/bins/edwr");
        createList(data);
    } catch (e) {
        errorText(`エラーが発生しました: 詳細 ${e}`);
    }
    removeLoadingImage();
}

const errorText = (text) => {
    const errorText = document.createElement('p');
    ul.replaceWith(errorText);
    errorText.textContent = text;
}

const createList = (lists) => {
    const frag = new DocumentFragment();
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
        li.appendChild(a);
        frag.appendChild(li);
    }
    ul.appendChild(frag);
}

fetchButton.addEventListener('click', () => {
    init();
});
