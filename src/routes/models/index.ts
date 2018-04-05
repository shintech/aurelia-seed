import _read from './read'
import _create from './create'

export default function (options) {
  return {
    read: _read(options),
    create: _create(options)
  }
}
