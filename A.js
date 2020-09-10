var butt1 = document.querySelector("button");


var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("cc");
    })
}

butt1.addEventListener("click", function(){
    alert("hala butt1 click shod");
})


const calc = (a, b) => a+b;
console.log("sum: " + calc(34, 8));

let a = [2, 3, 12, 13, 17, 41, 13]

console.log("a: ", a);
console.log("map a: ", a.map((n) => { return n+1}));
console.log("filter a: ", a.filter((n) => {return n===13}));
console.log("reduce a: ", a.reduce((acc, num) => {return acc+num}));


