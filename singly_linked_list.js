function Node(data) {
    this.data = data;
    this.next = null;
}

class SinglyLinkedList { 
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    //Add node to list
    addNode(data) {
        const node = new Node(data);
        if(!this.head) {
            // If there's no head, that means that the list has no length'
            // The node will then be both the tail and the head.
            this.head = node;
            this.tail = node;
        } else { 
            // if the list has a length, the tail's next node is the new node.
            this.tail.next = node;
            this.tail = node;
        }
        // We just added a new node, so the list is one node longer
        this.numberOfValues++;
    }

    removeNode(data) {
        let previous = this. head;
        let current = this.head;
        while(current) {
            
        }

    }
}
