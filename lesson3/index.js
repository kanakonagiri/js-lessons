const list = [
    {href:'a1.html', src:'img/bookmark.png', text:'a1'},
    {href:'a2.html', src:'img/message.png', text:'a2'}
]

const lists = document.getElementById('js-lists');

list.forEach((listData) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = listData.href;
    const img = document.createElement('img');
    img.src = listData.src;
    const text = document.createTextNode(listData.text);

    a.appendChild(img);
    a.appendChild(text);
    li.appendChild(a);
    document.getElementById('js-lists').appendChild(li);
});




