
/*let bitlist = [36941, 39244, 37340, 35540, 38200, 35640, 36845, 37241, 40623, 34742, 35800]*/

let bitlist = [10, 18, 33 , 31, 3 , 8, 22, 29 , 7, 8];
let profit=[];
let k=0;
for(let i = 0; i<bitlist.length; i++){
    k++;
    for(let j = k; j<bitlist.length; j++){
        profit.push(bitlist[j] - bitlist[i]);
    }
}
max = profit[0]
for(let item of profit){
    if (item > max){
       max = item;
   }
}
 document.write(` Найбільший прибуток: ${max}`);
 console.log(profit)
