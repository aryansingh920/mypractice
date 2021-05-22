let variable = prompt('Enter your name');
// alert('Hello'+' '+((variable[0].toUpperCase())+variable.slice(1,variable.length)))
variable = (variable.trim())+' '
nwrd = ''
ans=''
for(i=0;i<variable.length;i++){
    if(variable[i] === ' '){
        nwrd = ((nwrd[0].toUpperCase())+(nwrd.slice(1,nwrd.length)).toLowerCase())+' '
        ans = ans+nwrd;
        nwrd = '';
    }
    else{
        nwrd = nwrd+variable[i]
    }
}
// Math.f
alert('Hello '+ans)



// function bmiCalculat(wt,ht){
//     var ans =((wt/(ht*ht)));
//     return Math.round(ans)
// }
//
// console.log(bmiCalculat(65,1.8))
// var n = Math.random();
// for (i=0;i<=10;i++){
//     let roll = Math.floor((n*5)+1);
//     console.log(roll)}

// function fibonacciGenerator (n) {
//     let a=0;
//     let b=1;
//     let  sum=0;
//     let arr = [a,b]
//     while(arr.length !== n){
//         sum=a+b;
//         arr.push(sum);
//         a=b;
//         b=sum;
//     }
// function fibonacciGenerator (n) {
//     let a=0;
//     let b=1;
//     let sum=0;
//     let arr = [a,b]
//     for(i=0;i<=999999999;i+=1)
//     {
//         if(arr.length === n){
//             break;
//         }
//         if(n===1){
//             arr.pop();
//             break;
//         }
//         if(n===0 || n<0){
//             arr=null;
//             break;
//         }
//         sum=a+b;
//         arr.push(sum);
//         a=b;
//         b=sum;
//
//     }
//     return arr;
// }
// console.log(fibonacciGenerator(50));
