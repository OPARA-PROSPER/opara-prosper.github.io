
var menu = document.getElementsByClassName("menu")[0];
var flag = true;

menu.addEventListener("click", function(e){
    
    var nav = document.getElementById("nav");

    if (flag) {

        nav.style.display = "block";
        flag = false;

    } 
    else {
        nav.style.display = "none";
        flag = true;
        
    }
    console.log(flag);
});

var hide = document.getElementsByClassName("landing_view")[0];

hide.addEventListener('mouseover', function(e){

    var animate = hide.children[0];
    animate.setAttribute('id', 'animate');
    console.log(animate);
});

