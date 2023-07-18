process.stdout.write("prompt > ");

const commands = require("./commands");

process.stdin.on("data", function (data) {
  let cmd = data.toString().trim().split(" ");
  let comando = cmd[0];
  let args = cmd.slice(1);

  commands[comando](args);
});
