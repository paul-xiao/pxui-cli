#! /user/bin/env node
const commander = require('commander')
const program = new commander.Command()
const exec = require('child_process').exec
program.version('1.0.0') // pxui --version

program
  .command('create <app-name>')
  .description('create a web site scaffold')
  .action((name, cmd) => {
    require('../lib/create')(name)
  })
program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    require('../lib/build')()
  })

program.parse(process.argv)

function execute(cmd) {
  exec(cmd, function (error, stdout, stderr) {
    if (error) {
      console.error(error)
    } else {
      console.log(stdout)
    }
  })
}
