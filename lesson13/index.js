const contents = document.getElementById('js-contents');

window.addEventListener('DOMContentLoaded', () => {
    // モーダルを表示させるボタンを表示する
    showModalOpenButton();
});

const showModalOpenButton = () => {
    const openButton = document.createElement('button');
    openButton.id = 'modalOpenButton';
    openButton.textContent = 'クリックしたらモーダルが表示されます';
    contents.appendChild(openButton);
    openButton.addEventListener('click', showModal)
}

const removeModalOpenButton = () => {
    const modalOpenButton = document.getElementById('modalOpenButton')
    modalOpenButton.remove();
}

const showModal = () => {
    // モーダルを表示するボタンを取り除く
    removeModalOpenButton();

    // モーダルを作成
    const modal = document.createElement('div');
    modal.id = 'modal';
    contents.appendChild(modal);
    const modalContent = document.createElement('div');
    modalContent.id = 'modal-content';
    modal.appendChild(modalContent);

    // リクエスト送信ボタンを作成し、モーダルの中に入れる
    const requestButton = document.createElement('button');
    requestButton.id = 'requestButton';
    requestButton.textContent = 'クリックしたらリクエストが送信されます';
    modalContent.appendChild(requestButton);

    // 閉じるボタンを作成し、モーダルの中に入れる
    const closeModalButton = document.createElement('button');
    closeModalButton.id = 'closeModal';
    closeModalButton.textContent = '閉じる';
    modalContent.appendChild(closeModalButton);

    //リクエスト送信ボタンがクリックされた時
    requestButton.addEventListener('click', showLists);
    
    //閉じるがクリックされた時
    closeModalButton.addEventListener('click', () => {
        modal.remove();
        // モーダルを表示させるボタンを表示する
        showModalOpenButton();
    });

    // モーダルコンテンツの外側をクリックしたらモーダルを閉じる
    document.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target === modal) {
            modal.remove();
            // モーダルを表示させるボタンを表示する
            showModalOpenButton();
        }
    })
}

const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.remove();
}

const showLoadingImage = () => {
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

const showLists = async () => {
    closeModal();
    showLoadingImage();
    try {
        const { data } = await getData('https://myjson.dit.upm.es/api/bins/edwr');
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
        a.textContent = list.text;
        const img = document.createElement('img');
        img.src = list.img;
        img.alt = list.alt;

        frag
            .appendChild(li)
            .appendChild(a)
            .insertAdjacentElement('afterbegin', img);
    }
    contents.appendChild(ul).appendChild(frag);
}
