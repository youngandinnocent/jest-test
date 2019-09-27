function Stack() {
  this.size = 0;
  this.storage = {};
}

Stack.prototype.push = function push(data) {
  this.size += 1;
  const { size } = this;
  this.storage[size] = data;
};

Stack.prototype.pop = function pop() {
  const { size } = this;
  let deletedData;
  if (size) {
    deletedData = this.storage[size];
    delete this.storage[size];
    this.size -= 1;
    return deletedData;
  }
  throw new Error('Stack is empty!');
};

Stack.prototype.isEmpty = function isEmpty() {
  if (this.size === 0) {
    return true;
  }
  return false;
};

export default new Stack();
