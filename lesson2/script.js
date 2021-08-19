    const li = document.createElement('li');

    const a = document.createElement('a');
    const href = document.createAttribute('href');
    href.value = "1.html";
    a.setAttributeNode(href);

    const img = document.createElement('img');
    const src = document.createAttribute('src');
    src.value = "bookmark.png";
    img.setAttributeNode(src);
    const alt = document.createAttribute('alt');
    alt.value = "ブックマーク";
    img.setAttributeNode(alt);

    const text = document.createTextNode('これです');

    const frag = new DocumentFragment();
    a.appendChild(img);
    a.appendChild(text);
    li.appendChild(a);
    frag.appendChild(li);

    //ulに挿入
    document.getElementById('js-lists').appendChild(frag);


