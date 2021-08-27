const listData = [
    {href:'a1.html', src:'img/bookmark.png', text:'a1'},
    {href:'a2.html', src:'img/message.png', text:'a2'}
]

const lists = document.getElementById('js-lists');

listData.forEach((list) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = list.href;
    const img = document.createElement('img');
    img.src = list.src;
    const text = document.createTextNode(list.text);

    a.appendChild(img);
    a.appendChild(text);
    li.appendChild(a);
    document.getElementById('js-lists').appendChild(li);
});




