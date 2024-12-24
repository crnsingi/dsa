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

            }
                    }

    }

}