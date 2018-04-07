import * as http from 'http'
import * as logger from 'winston'
import chalk from 'chalk'

export default function (app, options) {
  const { pkg, port } = options

  const server = new http.Server(app)

  server.on('listening', () => {
    logger.info(`${chalk.bgBlack.cyan(pkg.name)} version ${chalk.bgBlack.yellow(pkg.version)} is listening on port ${chalk.bgBlack.green(port)}...`)
  })

  server.on('error', err => {
    logger.error(err)
  })

  return server
}