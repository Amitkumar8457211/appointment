const axios = require("axios");
const fs = require('fs');
const excelToJson = require('convert-excel-to-json');

const downloadImage = async (url) => {
    const writer = fs.createWriteStream("ipl.xlsx");
    const streamResponse = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    streamResponse.data.pipe(writer);
    writer.on('finish', () => console.log("Finished"));
    writer.on('error', () => console.error("Error while dowloading image"));
}

const convert = () => {
    const result = excelToJson({
        sourceFile: 'ipl.xlsx',
        header:{
            rows: 1
        },
        columnToKey: {
            "*": '{{columnHeader}}'
        }
    });
    return result;
}

const imageLink = "https://docs.google.com/spreadsheets/d/1DtwR2OeN1urfR0vQayKjC-tYIGfKkcq09ALV8He4iyE/export?format=xlsx&id=1DtwR2OeN1urfR0vQayKjC-tYIGfKkcq09ALV8He4iyE";

// downloadImage(imageLink);
console.log("result",convert());

console.log("run done");
