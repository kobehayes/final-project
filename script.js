var xhr = new XMLHttpRequest();
xhr.open("GET", 'wp-includes/meta.php.', true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
        console.log(data);
    }
}
xhr.send();
