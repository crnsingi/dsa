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
        if(!this.values.hasOwnProperty(hash)) {
            // If the values doesn't have the hash value,
            //add it to the values object, and set it equal
            // to an empty object.
            this.numberOfValues++;
        }
        // Set the hash's key value euqal to the new value.
        this.values[hash][key] = value;
    }

    remove(key) {
        // First, find the hash.
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            // If the values have the hash, and the hash's value has a key, then delete.
            delete this.values[hash][key];

        }

    }
}