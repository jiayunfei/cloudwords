const shell = require('shelljs')

function npmlogin () {
  const username = 'fanhair';
  const password = '';
  const email = '';
  const inputArray = [
    username + "\n",
    password + "\n",
    email + "\n",
  ]

  const child = shell.exec('npm login', { async: true })

  child.stdout.on('data', (chunk) => {
    const cmd = inputArray.shift();
    if (cmd) {
      shell.echo("input " + cmd);
      child.stdin.write(cmd);
    } else {
      child.stdin.end();
    }
  })
}
npmlogin();
