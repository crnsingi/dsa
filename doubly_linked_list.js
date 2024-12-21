function Node(data) {
    // Node in doubly linked has both a previous and next node value.
    this.data = data;
    this.previous = null;
    this.next = null;
}

class DoublyLinkedList { 
    constructor() {
        this.head =null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add(data) {
        const node = new Node(data);
        if (!this.head) {
            // if the list is empty, the new node is both the head and the tail.
            this.head = node;
            this.tail = node;
        } else { 
            // Otherwise, the new node's previous node is equal to the
            // list's tail before adding the new node. This means that
            // the new node is behind the current tail
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }

    remove(data) { 
        let current = this.head;
        while (current) {
            if (current.data === data) {
                
            }

        }

    }

}