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
                if(current === this.head && current ===this.tail) { 
                    // If there's only one songle node in the list.
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) { 
                // The head's value value should  be set to the next node's value
                // and the previous node of the new head to null
                // and there is no previous node anymore.
                this.head = this.head.next;
                this.head.previous = null;
                } else if ( current === this.tail) { 
                    // Set the value of the node before the tail as the new tail.
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    // If it's neither thr tail or head.
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }

            }

        }

    }

}