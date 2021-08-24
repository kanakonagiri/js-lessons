const li01 = document.createElement('li');
const a01 = document.createElement('a');
a01.href = "1.html";
const img01 = document.createElement('img');
img01.src = "bookmark.png";
img01.alt = "ブックマーク";
const text01 = document.createTextNode('a1');

a01.appendChild(img01);
a01.appendChild(text01);
li01.appendChild(a01);
document.getElementById('js-lists').appendChild(li01);

const li02 = document.createElement('li');
const a02 = document.createElement('a');
a02.href = "2.html";
const img02 = document.createElement('img');
img02.src = "message.png";
img02.alt = "メッセージ";
const text02 = document.createTextNode('a2');

a02.appendChild(img02);
a02.appendChild(text02);
li02.appendChild(a02);
document.getElementById('js-lists').appendChild(li02);