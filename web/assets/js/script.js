var btn = $("#create");
var val = $("#value");

btn.click(function() {
    // console.log()
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("demo").innerHTML =
    //             this.responseText;
    //     }
    // };
    // xhttp.open("GET", val.val(), true);
    // xhttp.send();
    $.ajax({
        method: "GET",
        url: "some.html.twig",
        data: {title: val.val()}
    })
});


