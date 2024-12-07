
import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs";
inquirer
  .prompt([{message: "type in ur url :",
    name :"URL"}
  ])
  .then((answers) => {
    const urls = answers.URL;
    var qr_svg = qr.image(urls);
    qr_svg.pipe(fs.createWriteStream('qr_generator.png'));
    fs.writeFile("URL.txt", urls, (err) => {
        if (err) throw err;
        console.log('URL saved to file');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });