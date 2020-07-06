const style = `
  <style>
    #ESX195 {
      position: absolute;
      top: 17rem;
      right: 3rem;
      color: #fff;
      background: #00699a;
      font-size: 1.6rem;
      width: 8rem;
      padding: 0.5rem;
      border-radius: 0.25rem;
    }
  </style>
`;

document.querySelector("head").insertAdjacentHTML("beforeend", style);
document
  .querySelector("body")
  .insertAdjacentHTML("beforeend", `<div id="ESX195">Back to Cart</div>`);

// nest above in fcn and use below for launching----later...

// var anotherInterval = setInterval(() => {
//     if (typeof window.jQuery !== "undefined") {
//       clearInterval(anotherInterval);
//       var $ = window.jQuery;
//     }
//   }, 50);
