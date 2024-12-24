function Node(data) {
    this.data = data;
    this.children = [];
}

class Tree { 
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        // Create new node /
        const node = new Node(data);
        // If the toNodeData arg is passed, find that node. Elsem return null.
        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        // If the parent isn't null, meaning it's not the root node
        // push the new node as a child to that parent node.
        if (parent) {
            parent.children.push(node);
        } else {  
            // If there is no parent, set the node equal to the root.
            if (!this.root) {
                this.root = node;
            } else { 
                //You can't have two roots.
                return 'Oops! You can\'t have two roots!'
            }
         }
    }

    remove(data) {
        // If the node's data we want to remove is euqal to the root's data
        // remove the node by setting it to null.
        if (this.root.data === data) {
            this.root = null;
        }

        // Define a queue, whit the initial value of an array with the root. 
        const queue = [this.root];
        while (queue.length) {
            // Get the first node in the queue.
            const node = queue.shift();
            // Get all the children that node has.
            for ( let [index, child] of node.children.entries()) {
                // If one of the children's data is equal to the node's data we want to remove:
                if(child.data === data) {
                    // Delete that specific child node from the children entries array.
                    node.children.splice(index, 1);
                } else { 
                    queue.push(child);
                }
            }
        }
    }

    contains(data) {
        return !!this.findBFS(data);
    }

    findBFS(data) { 
        // Breadth-first search.
        // Define a queue, with the initial value of an array with the root.
        const queue = [this.root];
        while (queue.length) {
            // Get the first node of the array. 
            const node = queue.shift();
            // If the node's data is equal to the data we want, return that node.
            if(node.data === data) {
                return node;
            }
            // Push the children of that node to the queue 
            for (const child of node.children) {
                queue.push(child);
            }
        }
        // If the queue has no length, meaning the value hasn't been found, return null.
        return null;
    }

    preOrder(node, fn) { 
        if(node) {
            if(fn) {
                
            }

        }

    }

}