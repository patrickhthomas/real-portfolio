window.onload = function openClose() {
    document.getElementById("navButton").onclick = function modal() {
        var element = document.getElementById("modalMenu");
        const style = getComputedStyle(element);
        const display = style.display;
        if (display == "none") {
            element.classList.add("modalOpen");
        } else {
            element.classList.remove("modalOpen");  
        }
    }
}

$('.accordion.clickIt').click(function() {
    var showIt = $('#hidden');
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret").css("transform", "rotate(0deg");
}
})


$('.accordion.clickIt2').click(function() {
    var showIt = $('#hidden2');
    var caret = document.getElementById("#caret2");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret2").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret2").css("transform", "rotate(0deg");
}
})


$('.accordion.clickIt3').click(function() {
    var showIt = $('#hidden3');
    var caret = document.getElementById("#caret3");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret3").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret3").css("transform", "rotate(0deg");
}
})

$('.accordion.clickIt4').click(function() {
    var showIt = $('#hidden4');
    var caret = document.getElementById("#caret4");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret4").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret4").css("transform", "rotate(0deg");
}
})

$('#last4').click(function() {
    var showIt = $('#hidden4');
    var disp = showIt.css('display');
    if (disp === "block") {
    showIt.addClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})


$('.accordion.clickIt5').click(function() {
    var showIt = $('#hidden5');
    var caret = document.getElementById("#caret5");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret5").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret5").css("transform", "rotate(0deg");
}
})

$('#last5').click(function() {
    var showIt = $('#hidden5');
    var disp = showIt.css('display');
    if (disp === "block") {
    showIt.addClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})

$('.accordion.clickItflow').click(function() {
    var showIt = $('#hiddenflow');
    var caret = document.getElementById("#caretflow");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caretflow").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caretflow").css("transform", "rotate(0deg");
}
})

$('.accordion.clickItbrand').click(function() {
    var showIt = $('#hiddenbrand');
    var caret = document.getElementById("#caretbrand");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caretbrand").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caretbrand").css("transform", "rotate(0deg");
}
})
$('.accordion.clickItbrand2').click(function() {
    var showIt = $('#hiddenbrand2');
    var caret = document.getElementById("#caretbrand2");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caretbrand2").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caretbrand2").css("transform", "rotate(0deg");
}
})

$('.accordion.clickItuse').click(function() {
    var showIt = $('#hiddenuse');
    var caret = document.getElementById("#caretuse");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caretuse").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caretuse").css("transform", "rotate(0deg");
}
})

$('.accordion.clickItpref').click(function() {
    var showIt = $('#hiddenpref');
    var caret = document.getElementById("#caretpref");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caretpref").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caretpref").css("transform", "rotate(0deg");
}
})