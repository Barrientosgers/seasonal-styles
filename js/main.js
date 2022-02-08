//alert('test');

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}  

/*
   change the source of the logo 
   change the src of the wear. In other words, logo to wear
   */

$("document").ready(function () {

    $("li.seasons a").click(function (e) {
        e.preventDefault();

        let season = $(this).attr("href");

        $("#logo").attr("src", "images/four-seasons.gif");
        $("#wear").attr("src", "images/fashion.jpg");
        $("html").css("background-color", "#FF7100");

        if (season == "Spring") {
            $("#logo").attr("src", "images/spring.gif");
            $("#wear").attr("src", "images/fashionspring.jpg");
            $("html").css("background-color", "#519259");
        } else if (season == "Summer") {
            $("#logo").attr("src", "images/summer.gif");
            $("#wear").attr("src", "images/summer-wear.jpg");
            $("html").css("background-color", "#E26A2C");
        } else if (season == "Fall") {
            $("#logo").attr("src", "images/fall.gif");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("html").css("background-color", "#A81124");
        } else if (season == "Winter") {
            $("#logo").attr("src", "images/winter.gif");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("html").css("background-color", "#009DAE");
        } else {
            $("#logo").attr("src", "images/four-seasons.gif");
            $("#wear").attr("src", "images/fashion.jpg");
            $("html").css("background-color", "#FF7100");
        }
        //alert(season);


        //alert("Im clicked!");
    });

});

