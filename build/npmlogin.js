const shell = require('shelljs')

function npmlogin () {
  const username = 'fanhair';
  const password = '1994527314jia';
  const email = '1650364177@qq.com';
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