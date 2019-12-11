var list = document.getElementById('list');
var hr = document.getElementById('hr');


document.getElementById('addItem').addEventListener('click', function() {
    var input = document.getElementById('userInput').value;
    var entry = document.createElement('div');
    entry.style.color = '#ffffff';
    entry.style.fontFamily = 'Baloo';
    entry.setAttribute('class', 'alert alert-secondary');
    entry.appendChild(document.createTextNode(input));
    list.appendChild(entry);
    hr.style.display = 'block';

    function markComplete() {
        entry.setAttribute('class', 'alert alert-success');
    }
    
    entry.addEventListener("click",markComplete);

    
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.style.color = 'red';
    deleteBtn.style.fontFamily = 'Cherry Bomb';
    deleteBtn.style.background = 'none';
    deleteBtn.style.border = 'none';
    deleteBtn.style.float = 'right';
    entry.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function() {
        entry.style.display = 'none';
    })

     
})

var input = document.getElementById('userInput');
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addItem").click();
    }
})



