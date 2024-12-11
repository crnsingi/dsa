function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BinarySearchTree { 
    constructor() {
        this.root = null;
    }

    add(data){
        const node = new Node(data);
        if(!this.root){
            // If the tree doesn't have a length, set the new node to the root.
            this.root = node;
        }

    }
    
}