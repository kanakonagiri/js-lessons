    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = "1.html";

    const img = document.createElement('img');
    img.src = "bookmark.png";
    img.alt = "ブックマーク";

    const text = document.createTextNode('これです');

    a.appendChild(img);
    a.appendChild(text);
    li.appendChild(a);
    document.getElementById('js-lists').appendChild(li);


