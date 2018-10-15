class SList {
  constructor() {
    this.head = null;
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

  isEmpty() {
    if(!this._size) {
      return true;
    }
    return false;
  }

  valueAt(index) {
    var counter = 0;
    var currentNode = head;

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
    this._size = this._size + 1;
    return;
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

// value_at(index) - returns the value of the nth item (starting at 0 for first)
// push_front(value) - adds an item to the front of the list
// pop_front() - remove front item and return its value
// push_back(value) - adds an item at the end
// pop_back() - removes end item and returns its value
// front() - get value of front item
// back() - get value of end item
// insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index
// erase(index) - removes node at given index
// value_n_from_end(n) - returns the value of the node at nth position from the end of the list
// reverse() - reverses the list
// remove_value(value) - removes the first item in the list with this value

var x = new SList();
console.log(x);
console.log(x.size);
console.log(x.isEmpty())
console.log(x.pushFront(4));
console.log(x.pushFront(3));
console.log(x.pushFront(2));
console.log(x.pushFront(1));
console.log(x)
