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

    }

}