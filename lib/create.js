const inquirer = require('inquirer')
const fs = require('fs')
const { exit } = require('process')

module.exports = async function (folder) {
  console.log('create new project', folder)
  const { ok } = await inquirer.prompt([
    {
      name: 'ok',
      type: 'confirm',
      message: `Generate project in current directory?`,
    },
  ])
  if (ok) {
    console.log('start creating')
    if (fs.existsSync(folder)) {
      console.log('')
      const { action } = await inquirer.prompt([
        {
          name: 'action',
          type: 'list',
          message: `${folder} existed, choose one way to deal with it`,
          choices: [
            {
              name: 'merge',
              value: 'merge',
            },
            {
              name: 'overwrite',
              value: 'merge',
            },
            {
              name: 'cancel',
              value: false,
            },
          ],
        },
      ])
      if (!action) {
        fs.rmdirSync(folder)
        exit(1)
      } else {
        console.log(action)
      }
    } else {
      fs.mkdirSync(folder)
    }
  }
}
