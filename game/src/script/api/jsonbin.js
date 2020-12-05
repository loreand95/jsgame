const API = 'https://jsonbox.io/box_a6a4ee3a884ea72b73db/5fa83d6edfeefb00171587e2'

export function httpGetAsync(callback, error) {
    let xhr = new XMLHttpRequest();

    xhr.onerror = () => error;
    xhr.onload = () => {
        if(xhr.status === 200){
            callback(JSON.parse(xhr.response))
        }else{
            error();
        }
    };

    xhr.open("GET", API, true); // true for asynchronous
    xhr.send();
}

export function httpPutAsync(score, callback) {
    let xmlHttp = new XMLHttpRequest();


    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(JSON.parse(xmlHttp.response));
    }
    xmlHttp.open("PUT", API, true);
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify({"score":score}));
}
