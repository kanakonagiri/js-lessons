const ul = document.getElementById('js-lists');

const fetchData = async() => {
    const response = await fetch('https://jsondata.okiba.me/v1/json/KN8s0211027113740');
    const obj = await response.json();
    const listData = obj.data;

    displayLoadingImage ();

    await new Promise(resolve => {
        setTimeout(() => {
            resolve(listData);
        }, 3000);
    });
    createList(listData);
}

const getData = async() => {
    try {
        return await fetchData();
    } catch (error) {
        errorText("エラーが発生しました");
        return error;
    } finally {
        removeLoadingImage ();
    }
}

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

const errorText = (text) => {
    const errorText = document.createElement('p');
    ul.replaceWith(errorText);
    errorText.textContent = text;
}

const createList = (value) => {
    const frag = new DocumentFragment();
    for(const list of value) {
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

getData();
