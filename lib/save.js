var save = document.getElementById('save');

function saveImage() {
    var data = canvas.toDataURL();

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200){
            var response = request.responseText;
            // console.log(response);
            // window.open( response, '_blank', 'location=0, menubar=0');
            window.open('download.php?file='+response, '_blank', 'location=0, menubar=0');
        }
    }

    request.open('POST', 'save.php', true);
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.send('img='+data);
    // www.example.com/file.php?name=john

    // window.open(data, '_blank', 'location=0, menubar=0');
}

save.addEventListener('click', saveImage, false);