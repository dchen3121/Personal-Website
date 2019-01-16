$(document).ready(function() {
    $(".various"+(new Date().getTime() % 2 + 1)).css("display", "block");
});