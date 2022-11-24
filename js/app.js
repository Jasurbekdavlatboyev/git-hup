let ism = prompt("ismizzi kiriting");
let familya = prompt("familyayizzi kiriting");

var sana = prompt("Iltimos tugilgan yilingizni tuliq kiriting. Misol uchun:xx.xx.xxxx");

let vaqt = new Date(sana).getTime();
let now = new Date().getTime();
alert(
  "Sizning yoshingiz: " +
    Math.floor((now - vaqt) / 1000. / 3600. / 24. / 365.25) +
    "\n" +
    "kun:" +
    Math.floor(
      ((now - vaqt) / 1000. / 3600. / 24. / 365.25 -
        Math.floor((now - vaqt) / 1000 / 3600 / 24 / 365.25)) *
        365.25
    ) +
    "\n" +
    "soat:" +
    Math.floor(
      (((now - vaqt) / 1000. / 3600. / 24. / 365.25 -
        Math.floor((now - vaqt) / 1000. / 3600. / 24. / 365.25)) *
        365.25 -
        Math.floor(
          ((now - vaqt) / 1000. / 3600. / 24. / 365.25 -
            Math.floor((now - vaqt) / 1000. / 3600. / 24. / 365.25)) *
            365.25
        )) *
        24
    )
);
