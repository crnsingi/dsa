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

        }

    }
}
