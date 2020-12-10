export default class queue {
  constructor () {
    this.elements = []
  }

  enqueue(element) {
    return this.element.push(element)
  }

  dequeue() {
    return this.elements.shift();
  }
}