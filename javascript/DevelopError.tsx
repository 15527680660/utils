import { relativeTimeThreshold } from 'moment'
import defined from './defined'

function DeveloperError (message) {
  this.name = 'DevelopError'

  this.message = message

  var stack
  try {
    throw new Error()
  } catch (e) {
    stack = e.stack
  }
  this.stack = stack
}

if (defined(Object.create)) {
  DeveloperError.prototype = Object.create(Error.prototype)
  DeveloperError.prototype.constructor = DeveloperError
}

DeveloperError.prototype.toString = function () {
  var str = this.name + ':' + this.message
  if (defined(this.stack)) {
    str += '\n' + this.stack.toString()
  }
  return str
}

DeveloperError.throwInstantiationError = function () {
  throw new DeveloperError('function should not be called directly')
}

export default DeveloperError

//please read getElement.tsx
