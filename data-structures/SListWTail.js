class SList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  set head(value) {
    this._head = value;
  }

  get head() {
    return this._head;
  }

  set size(value) {
    this._size = value;
    return;
  }

  get size() {
    return this._size;
  }

  set tail(value) {
    this._tail = value;
    return;
  }

  get tail() {
    return this._tail;
  }

  isEmpty() {
    if(!this._size) {
      return true;
    }
    return false;
  }

  valueAt(index) {
    var counter = 0;
    var currentNode = this._head;

    while(counter !== index ) {
      currentNode = currentNode.next;
      counter = counter + 1
    }

    return currentNode.item;
  }

  pushFront(value) {
    var newNode = new SListNode(value);
    newNode.next = this._head;
    this._head = newNode;

    if(this._size === 0) {
      this._tail = newNode;
    }

    this._size = this._size + 1;

    return;

  }

  popFront() {
    var headValue = this._head._item;
    this._head = this._head._next;
    this._size = this._size - 1;
    return headValue;
  }

  pushBack(value) {
    var newNode = new SListNode(value);
    this._tail.next = newNode;
    this._tail = newNode;

    this._size = this._size + 1;
    return;
  }

  popBack() {
    var tailValue = this._tail._item;
    var currentNode = this._head;

    while(currentNode.next.next !== null ) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this._tail = currentNode;

    this._size = this._size - 1;
    return tailValue;
  }

  front() {
    return this._head._item;
  }

  back() {
    return this._tail._item;
  }

  insert(index, value) {
    var counter = 0;

  }

  erase(index) {

  }

  valueNFromEnd(n) {

  }

  reverse() {

  }

  removeValue(value) {
    var counter = 1;
    var currentNode = this._head;
    var notFound = true;

    while(notFound || counter !== this._size) {
      if(currentNode.item === value) {
        notFound = true;
      } else {
        currentNode = currentNode.next;
        counter = counter + 1;
      }
    }
  }
}

class SListNode {
  constructor(item) {
    this.item = item;
    this.next = null;
  }

  get item() {
    return this._item;
  }

  set item(value) {
    this._item = value;
    return;
  }

  get next() {
    return this._next;
  }

  set next(value) {
    this._next = value
    return;
  }

}


// insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index
// erase(index) - removes node at given index
// value_n_from_end(n) - returns the value of the node at nth position from the end of the list
// reverse() - reverses the list
// remove_value(value) - removes the first item in the list with this value

var x = new SList();
console.log(x);
console.log(x.pushFront(4));
console.log(x);
console.log(x.pushFront(3));
console.log(x);
console.log(x.pushFront(2));
console.log(x);
console.log(x.pushFront(1));
console.log(x)
console.log(x.valueAt(1))
console.log(x.popFront());
console.log(x);
console.log(x.pushBack(5));
console.log(x);
console.log(x.popBack());
console.log(x);
