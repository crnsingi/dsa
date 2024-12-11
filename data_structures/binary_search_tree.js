function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BinarySearchTree { 
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);
        if(!this.root){
            // If the tree doesn't have a length, set the new node to the root.
            this.root = node;
        } else { 
        let current = this.root;
            while (current) {
            if (node.data < current.data) {
            if(!current.left){
            // If the current node doesn't have a left value
            // and the new node's data is smaller than the current node's data
            // set the current node's left value equal to the new node.
        current.left = node;
            break;
                }
            // Loop until !current.left returns true.
                    current = current.left;
            } else if (node.data > current.data) {
            //Same as for previous one, but opposite
            if(!current.right) {
            current.right = node;
            break;
                }
            current = current.right;
            } else { 
            break;
            }
        }
    }
    }
    remove (data) {
        const self = this;
        const removeNode = (node, data) => {
            if(!node) {

            }
    
        }
    }
}
