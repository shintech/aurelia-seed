import { headers } from '../../lib'

export default function (options) {
  const { db, logger } = options

  return async function (req, res) {
    let result, status: number, message: string, response
    options.startTime = Date.now()

    try {
      result = await db.one('insert into models(first_name, last_name, email, optional, message)' + 'values( ${first_name}, ${last_name}, ${email}, ${optional}, ${message} ) returning id', req.body) // eslint-disable-line
      status = 200
      message = `Inserted one model; id: ${result.id}...`

      logger.info(`Inserted one model; id: ${result.id}`)
    } catch (err) {
      status = 400
      message = err.message
      
      logger.error(err.message)
    }

    response = {
      body: { result, status, message }
    }

    res.status(status)
    .format({
      json: () => {
        res.set(headers(response, options))
          .write(JSON.stringify(response))
        res.end()
      }
    })
  }
}
