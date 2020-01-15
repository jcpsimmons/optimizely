const fs = require("fs");
const axios = require("axios");
const readlineSync = require("readline-sync");

let OPTIMIZELY_CREDS = fs
  .readFileSync(".optimizely-creds", { encoding: "utf8" })
  .replace(/(\r\n|\n|\r)/gm, "");
// fs.readFile(".optimizely-creds", "utf8", function(err, contents) {
//   OPTIMIZELY_CREDS = contents.replace(/(\r\n|\n|\r)/gm, "");
// });
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${OPTIMIZELY_CREDS}`
};
console.log(headers);

let esxNumber = readlineSync.question(`What's the new experiment number?  `);
let esxName = readlineSync.question(`What's the new experiment name?  `);
let editorUrl = readlineSync.question(
  `What URL should go in the editor (blank for LS.com)?  `
);

editorUrl = editorUrl == "" ? "https://livingspaces.com" : editorUrl;

axios
  .post(
    "https://api.optimizely.com/v2/experiments",
    {
      project_id: 8788531144,
      name: `ESX${esxNumber} - ${esxName}`
    },
    { headers: headers }
  )
  .then(res => {
    console.log(`Status Code: ${res.statusCode}`);
  })
  .catch(err => {
    console.error(err);
  });
