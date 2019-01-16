$(document).ready(function() {
    var increment = new Date().getTime() % 3 + 1;
    $(".various"+ increment).css("display", "block");
});

function copyPhoneNumber() {
    var phoneNum = document.getElementById("phoneNum");
    phoneNum.select();
    document.execCommand("copy");
    alert("Copied phone number: " + phoneNum.value);
}