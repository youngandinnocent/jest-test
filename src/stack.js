export default new Stack();

function Stack() {
    this.size = 0;
    this.storage = {};
}

Stack.prototype.push = function(data) {
    let size = ++this.size;
    this.storage[size] = data;
}

Stack.prototype.pop = function() {
    let size = this.size;
    let deletedData;
    
    if (size) {
        deletedData = this.storage[size];
        
        delete this.storage[size];
        this.size--;
        return deletedData;
    }
    throw new Error('Stack is empty!');
}

Stack.prototype.isEmpty = function() {
    return this.size === 0 ? true : false;
}
