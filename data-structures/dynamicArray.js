module.exports = class DynamicArray {
  constructor() {
    this.size = 0;
    this.capacity = 8;
    this.dataArray = Array(this._capacity)
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get capacity() {
    return this._capacity;
  }

  set capacity(value) {
    this._capacity = value;
  }

  isEmpty() {
    if (this._size === 0) {
      return true;
    }
    return false;
  }

  at(index) {
    if(index > this._capacity) {
      return "Error: Out of Bounds";
    }
    return this.dataArray[index - 1]
  }

  push(item) {
    this.dataArray[this.size] = item;
    this._size = this._size + 1;
    if(this._size === this._capacity) {
      this.resize(this._capacity * 2)
    }

    return;
  }

  insert(item, index) {
    this._size = this._size + 1;

    if(this._size === this._capacity) {
      this.resize(this._capacity * 2)
    }

    var nextItem = this.dataArray[index];
    this.dataArray[index] = item;
    index = index + 1;

    while(nextItem !== undefined) {
      var temp = this.dataArray[index];
      this.dataArray[index] = nextItem;
      nextItem = temp;

      index = index + 1;
    }

    return true;
  }

  prepend(item) {
    this.insert(item, 0);
    return true;
  }

  resize(newCapacity) {
    var temp = Array(newCapacity);

    this._capacity = newCapacity;

    for(var i = 0; i < this._size; i++) {
      temp[i] = this.dataArray[i];
    }

    this.dataArray = temp;

  }

  pop() {
    var lastValue = this.dataArray[this._size - 1];
    this.dataArray[this._size - 1] = undefined;
    this._size = this._size - 1;

    if(this._size == this._capacity / 4 && this._capacity !== 4) {
      this.resize(this._capacity / 2)
    }
    return lastValue;

  }

  delete(index) {
    if(this.dataArray[index] === undefined) {
      return -1;
    } else {
      this.dataArray[index] === undefined;

      for(var i = index; i < this._size; i++) {
        this.dataArray[index] = this.dataArray[index + 1];
      }
      this.dataArray[this.size - 1] = undefined;

      this._size = this._size - 1;

      if(this._size === this._capacity / 4 && this._capacity !== 4) {
        this.resize(this._capacity / 2)
      }
      return;
    }
  }

  remove(item) {
    for(var i = this._size; i >= 0; i--) {
      if(this.dataArray[i] === item) {
        this.delete(i);
      }
    }

    return;
  }

  find(item) {
    var notEndOfArray = true;
    var index = 0;

    while(notEndOfArray) {
        if(this.dataArray[index] === item) {
          return index;
        }

        if(index === this._size) {
          notEndOfArray = false;
        }

        index = index + 1;
    }

    return -1;
  }
}
