// function pol() {
//   try {
//     return (
//       parseInt(
//         document
//           .querySelector("[for=tohome-option] span.label-n-t")
//           .innerText.replace("$", "")
//       ) -
//         parseInt(
//           document
//             .querySelector(".progress__actual-value.text-blue.font-weight-600")
//             .textContent.replace("$", "")
//         ) <
//       0
//     );
//   } catch (error) {}
// }

function pol() {
  try {
    return (
      parseInt(
        document
          .querySelector("[for=tohome-option] span.label-n-t")
          .innerText.replace("$", "")
      ) == 59 &&
      parseInt(
        document
          .querySelector(".free-shipping-incentive__title")
          .textContent.replace(/[^0-9\.]/g, "")
      ) < 59
    );
  } catch (error) {}
}
