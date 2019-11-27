const fs = require("fs");
const fetch = require("node-fetch");
const { parse } = require("node-html-parser");

const url =
  "https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html";

const parseTextToJsonList = text => {
    const lines = text.split("\n                              \n                           \n                           \n                              \n                              ")

  return lines.map(language => {
    return {
        Language: language.split("(")[0].trim(),
        languageCode: language.split('(')[1].split(')')[0].trim()
    };
  });
};

const main = async () => {
  const response = await fetch(url);
  //   console.log(response.body)
  const body = await response.text();
  console.log(body);
  const root = parse(body);

  const itemizedlist = root.querySelector(".itemizedlist");
  const innerText = itemizedlist.text.trim();
  console.log(innerText);
  const list = parseTextToJsonList(innerText);
  console.log(list);
  fs.writeFileSync('languages.json', JSON.stringify(list,null,2));
};


main();

