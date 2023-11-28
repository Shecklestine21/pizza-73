document.getElementById("btn").addEventListener("click", pizzaOrder);

function pizzaOrder(){
    let size = document.getElementById("size").value;
    let top1 = document.getElementById("top1").value;
    let top2 = document.getElementById("top2").value;
    let top3 = document.getElementById("top3").value;

    console.log(size);
    console.log(top1);
    console.log(top2);
    console.log(top3);
    
    let greeting = `Thank you for ordering from pizza 73! your ${size} with ${top1} and ${top2} and ${top3} will be ready in 20 minutes`;
document.getElementById("greeting").innerHTML = greeting;

document.getElementById("pizza-img").innerHTML  = 
`<img id="pizza-img" src="img/download.png">`;
}

