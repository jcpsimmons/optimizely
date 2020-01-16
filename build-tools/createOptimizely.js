const fs = require("fs");
const axios = require("axios");
const readlineSync = require("readline-sync");

let OPTIMIZELY_CREDS = fs
  .readFileSync(`${__dirname}/.optimizely-creds`, { encoding: "utf8" })
  .replace(/(\r\n|\n|\r)/gm, "");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${OPTIMIZELY_CREDS}`
};
console.log(headers);

let esxNumber = readlineSync.question(`What's the new experiment number?  `);
let esxName = readlineSync.question(`What's the new experiment name?  `);
let esxDescription = readlineSync.question(
  `What's the description of the experiment? `
);
let varName = readlineSync.question(`What's the name of the variation? `);

// CREATE FOLDER STRUCTURE and FILE WITH jQUERY WAIT LOOP
let esxFormatted = `./src/ESX${esxNumber}`;
if (!fs.existsSync(esxFormatted)) {
  fs.mkdirSync(esxFormatted);
  fs.writeFileSync(
    `${esxFormatted}/ESX${esxNumber}.js`,
    `var anotherInterval = setInterval(() => {
      if (typeof window.jQuery !== "undefined") {
        clearInterval(anotherInterval);
        var $ = window.jQuery;
      }
    }, 50);
    `
  );
} else {
  console.error(`ERROR - An experiment numbered ${esxNumber} already exists!`);
  process.exit();
}

// BUILD DATA
let data = {
  project_id: 8788531144,
  name: `ESX${esxNumber}: ${esxName}`,
  description: esxDescription,
  type: "a/b",
  variations: [
    {
      weight: 5000,
      name: "Original",
      actions: [
        {
          page_id: 16772130649
        }
      ]
    },
    {
      weight: 5000,
      name: varName,
      actions: [
        {
          page_id: 16772130649
        }
      ]
    }
  ],
  page_ids: [16772130649],
  metrics: [
    {
      aggregator: "sum",
      field: "revenue",
      scope: "visitor",
      winning_direction: "increasing"
    },
    {
      aggregator: "unique",
      event_id: 10666463782,
      scope: "visitor",
      winning_direction: "increasing"
    },
    {
      aggregator: "unique",
      event_id: 14398330031,
      scope: "visitor",
      winning_direction: "increasing"
    },
    {
      aggregator: "unique",
      event_id: 10650830507,
      scope: "visitor",
      winning_direction: "increasing"
    },
    {
      aggregator: "unique",
      event_id: 10654130421,
      scope: "visitor",
      winning_direction: "increasing"
    }
  ]
};

// API CALL to create EXP
axios
  .post("https://api.optimizely.com/v2/experiments", JSON.stringify(data), {
    headers: headers
  })
  .then(res => console.log(res))
  .catch(err => {
    console.error(err);
  });
