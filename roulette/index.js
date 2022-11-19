const prompt = require("prompt-sync")({ sigint: true });

const num = Math.round(Math.random() * 100) / 100;
console.log (num);

let color = ""

if (num >= 0 && num <= 0.45)
{
    color = "red";
}
if (num > 0.45 && num <= 0.90)
{
    color = "black";
}
if (num > 0.90)
{
    color = "green";
}

console.log(color);