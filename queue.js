class Queue { 
    constructor() { 
        // Empty queue to start with.
        this.queue = [];
    }

    enqueue(value) { 
        //Push value to queue.
        this.queue.push(value);
    }

    dequeue() {
        //Remove value from queue and return this value.
        return this.queue.shift();
    }

    peek() { 
        
    }

}