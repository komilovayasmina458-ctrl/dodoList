let list = JSON.parse(localStorage.getItem('data')) || [];
show();

function save() {
    let n = document.getElementById('name').value;
    let u = document.getElementById('num').value;
    
    if (n == "" || u == "") {
        alert('Заполни поля!');
        return;
    }

    list.push({name: n, num: u});
    
    localStorage.setItem('data', JSON.stringify(list));
    
    document.getElementById('name').value = "";
    document.getElementById('num').value = "";
    
    show();
}

function show() {
    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += '<div class="note"><div><b>' + list[i].name + '</b><br>' + list[i].num + '</div><span class="del" onclick="del(' + i + ')">X</span></div>';
    }
    document.getElementById('out').innerHTML = html;
}

function del(i) {
    list.splice(i, 1);
    localStorage.setItem('data', JSON.stringify(list));
    show();
}