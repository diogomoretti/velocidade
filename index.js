'use strict'

const speedTest = require('speedtest-net')
const test = speedTest({ maxTime: 5000 })
const chalk = require('chalk')
const ora = require('ora')
const colorLabel = chalk.gray.bold

const spinner = ora({
  text: 'Verificando sua conexão de internet...',
  color: 'yellow'
})

module.exports = () => {
  spinner.start()

  test.on('data', (data) => {
    spinner.stop()

    console.log(`
  ${chalk.green.bold('⬇')} ${colorLabel('Download')} ${data.speeds.download} Mbps
  ${chalk.blue.bold('⬆')} ${colorLabel('Upload')} ${data.speeds.upload} Mbps
  ${chalk.cyan.bold('◉')} ${colorLabel('Operadora')} ${data.client.isp}
    `)
  })

  test.on('error', () => {
    spinner.stop()
    console.log(`${chalk.red.bold('Um erro ocorreu')}`)
  })
}
