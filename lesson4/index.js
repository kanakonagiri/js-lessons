const listData = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
]

for(const list of listData) {

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
    document.getElementById('js-lists').appendChild(li);
}



