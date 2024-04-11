let count = document.querySelector('.count');
console.log(count)

// set the count to zero initially 
count.innerHTML = "0";


const countAdd = document.querySelector('.Add');
console.log(countAdd);
const countRemove =document.querySelector('.Remove');
console.log(countRemove);


countAdd.addEventListener('click',()=>{
    let currentValue = parseInt(count.innerHTML);
    count.innerHTML=currentValue+1;
});

countRemove.addEventListener('click',()=>{
    let currentValue = parseInt(count.innerHTML);
    count.innerHTML=currentValue-1;
});



// so while natively using js ,if i am using same varibale at multiple locations in the page and i want them to change at the same time i have to target all of them ,i have to decide which once i have to change and which ones not , which is quite hectic , this is automated using react or reactive library , react makes the process of reacting automatic , if a value is present at multiple locations or at multiple pages , and if we change it , react will react for us and change it at all the locations , this is where react hooks comes in the picture .  

