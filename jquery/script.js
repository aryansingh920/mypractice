var variables = $('button')[5];
console.log(variables);
// $('body').css('margin', '20px');
let newtext='';

$('body').keydown(function(event){
    // console.log(this.event.key);
    newtext = newtext+event.key;
    $('h1').text(newtext);
})
$('h1').slideUp();