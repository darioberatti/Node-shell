const fs = require("fs");
const request = require("request");

module.exports = {
  pwd: function () {
    process.stdout.write(process.mainModule.path);
    process.stdout.write("\nprompt > ");
  },
  date: function () {
    process.stdout.write(Date());
    process.stdout.write("\nprompt > ");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (arr) {
    process.stdout.write(arr.join(" "));
    process.stdout.write("\nprompt > ");
  },
  cat: function (arr) {
    fs.readFile(`./${arr}`, (err, data) => {
      if (err) console.error("No data.");
      process.stdout.write(data.toString());
      process.stdout.write("\nprompt > ");
    });
  },
  head: function (arr) {
    fs.readFile(`./${arr}`, (err, data) => {
      if (err) console.error("No data.");
      let saltoDeLinea = data.toString().split("\n");
      let cincoPrimerasLineas = saltoDeLinea.slice(0, 5).join("");
      process.stdout.write(cincoPrimerasLineas);
      process.stdout.write("\nprompt > ");
    });
  },
  tail: function (arr) {
    fs.readFile(`./${arr}`, (err, data) => {
      if (err) console.error("No data.");
      let saltoDeLinea = data.toString().split("\n");

      let cincoUltimasLineas = saltoDeLinea
        .slice(saltoDeLinea.length - 5)
        .join("");
      process.stdout.write(cincoUltimasLineas);
      process.stdout.write("\nprompt > ");
    });
  },
  curl: function (url) {
    request(url.toString(), (err, response, body) => {
      if (err) throw err;
      process.stdout.write(body + "\n");
      process.stdout.write("prompt > ");
    });
  },
};
