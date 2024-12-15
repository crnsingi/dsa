class HashTable { 
    constructor(size) {
        // Create the object where you're going to store the values.
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }

    add(key, value) { 
        // First, find the hash.
        const hash = this.calculateHash(key);

    }
}