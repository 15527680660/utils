import DeveloperError from './DevelopError'

function getElement (element) {
  if (typeof element === 'string') {
    var foundElement = document.getElementById(element)
    if (foundElement === null) {
      throw new DeveloperError(
        'element with id"' + element + '"does not exist in the element'
      )
    }
    element = foundElement
  }
  return element
}

export default getElement
