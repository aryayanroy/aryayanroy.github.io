function section_active(target){
    var new_active = document.querySelector("section[data-target='"+target+"']");
    if(new_active){
        new_active.classList.add("active");
        new_active.classList.remove("inactive");
    }
}

function section_target(target){
    var active = document.querySelectorAll(".active");
    var checkbox = document.getElementById("menu-toggle");
    checkbox.checked = false;

    if(active.length == 0){
        section_active(target);
    }else{
        active.forEach(inactive => {
            inactive.classList.remove("active");
            inactive.classList.add("fadeout");
            inactive.addEventListener("animationend", function() {
                inactive.removeEventListener("animationend", arguments.callee);
                inactive.classList.remove("fadeout");
                inactive.classList.add("inactive");
                section_active(target)
            });
        })   
    }
}

const sections = document.getElementsByName("section");

for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("change", function(event) {
        var target = event.target.value;
        section_target(target);
    });
}

let header = document.getElementsByTagName("header")[0]
window.onscroll = function(e) {
    if(this.oldScroll > this.scrollY){
        header.style.top = "0";
    }else{
        header.style.top = "-86px";
    };
    this.oldScroll = this.scrollY;
}