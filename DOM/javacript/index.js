alert('Hello')
function check_function(){
    document.querySelector('input').click();
    return true;
}
function change_body(){
    document.querySelector('body').classList.toggle('bodyadd');
}
function change_bing(){
    document.querySelector('a').setAttribute='https://zigy.in';
}
function print(){
    var valueq = document.querySelector('.emailinput').value ;
    document.querySelector('#addtext').innerHTML = valueq;
}
function changebackground(){
    var value = document.querySelector('.backgroundcolor').value ;
    document.querySelector('body').style.backgroundColor=value;
}
function changeshirt(){
    var value = document.querySelector('.shirtcolor').value ;
    document.querySelector('.shirt').style.color=value;
}
function changeshirt1(){
    var value = document.querySelector('.shirtcolor').value ;
    document.querySelector('.shirt1').style.backgroundColor=value;
}