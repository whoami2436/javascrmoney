const form = document.querySelector("#form");
const input = document.querySelector("#input");
const son = document.querySelector("#son");
const money = [
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    1
];

form.addEventListener("click", (first) => {
    first.preventDefault();
    son.innerHTML = "";
    let amount = +input.value;
    money.map((deyer) => {
        let num = Math.trunc(amount / deyer);
        if (num) {
            amount = amount - num * deyer;
            const sekil = document.createElement("div");
            sekil
                .classList
                .add("sekil");
            for (let i = 0; i < num; i++) {
                const image = document.createElement('img');
                image.src = `./images/${deyer}.jpg`;
                image.style.left= `${i* 80}px`

                sekil.append(image);
            }
            son.append(sekil);
        }

    })
});
