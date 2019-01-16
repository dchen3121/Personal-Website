$(document).ready(function() {
    var increment = new Date().getTime() % 3 + 1;
    $(".various"+ increment).css("display", "block");
});