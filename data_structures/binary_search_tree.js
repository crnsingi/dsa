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
                return null;
            }

            if (data === node.data) {
                //We found the node we want to remove
                if(!node.left && !node.right) {
                    return null;
                }
             // If the node doesn't have a left value, or a right value, it means
             // that the node is at the end. Return the value before/after this node.
             if (!node.left) {
                return node.right;
             }
             if (!node.right) {
                return node.left;
             }

            // The getMin function returns the value of the node on the left
            // if we pass the node to the right as an argument, the current node 
            // gets returned, as the right's left is the current node. 
            // Set this as our temp var to not override the value.
            const temp = self.getMin(node.right);
            node.data = temp;
            // Remove the node's right.
            node.right = removeNode(node.right, temp);
            return node;
            } else if (data < node.data) {
                // If all values are too small, remove the most left node
                node.left = removeNode(node.left, data);
                return node;
            } else {
                // If all values are too big, remove the most right node.
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }

    contains(data) {
        let current = this.root;
        while(current) {
            if (data === current.data) {
                // If the node's data is equal ro the data, it exists in the list.
                return true;
            }

            if (data < current.data) {
                // If the data is too small, go to the node on the left.
                current = current.left;
            } else {
                //Else, go to the node on the right until data === current.data returns true.
                current = current.right;
            }
        }

        return false;
    }

    preOrder(node, fn) {
        if(node) {
            if(fn) { 
                fn(node);
            }
            this.preOrder(node.left, fn);
            this.preOrder(node, right, fn);
        }
    }

    inOrder(node, fn) { 
        if(node) {
            this.inOrder(node.left, fn);
            if(fn) {
                fn(node);
            }
            this.inOrder(node.right, fn);
        }
    }
    
    postOrder(node, fn) {
        if(node) {
            this.postOrder(node.left, fn);
            this.postOrder(node.right, fn);
            if(fn) {
                fn(node);
            }
        }
    }

    traverseDFS(fn, method) {
        // Depth-first search.
        const current = this.root;
        if (method) {
            // Invoke method passed as arg on current node .
            this[`${method}`] (current, fn);
        } else { 
            this. preOrder(current, fn);
        }
    }

    traverseBFS(fn) { 
        //Breadth-first search/
        //Check nodes on every *level* before going down
        this.queue = [];
        this.queue.push(this.root);
        while(this.queue.length) { 
            //Node is equal to the first node in the queue.
            const node = this.queue.shift();
            //  Invoke function on current node.
            if(fn) {
                fn(node);
            }
            // if the nnode has a left value, push that value to the queue.
            if(node.left) { 
                
            }
 

        }

    }




}
