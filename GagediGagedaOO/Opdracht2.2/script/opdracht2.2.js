let output = document.getElementById("output");


function success() {
    let studenten = JSON.parse(this.responseText);
    console.log(studenten);
}

function error(err) {
    console.error('Error Occurred :', err);
}


let xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', 'jsonRead.php', true);
xhr.send();