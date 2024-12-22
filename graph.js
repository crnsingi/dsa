class Graph { 
    constructor() { 
        // Number of vertices in graph.
        this.vertices = [];
        //Ordered pairs. 
        this.edges= [];
        this.numberOfEdges = 0;
    }

    addVertex(vertex) {
        // Add the new vertex to the vertices array.
        this.vertices.push(vertex);
        // In edges array, set the verte'x value equal to an empty array.
        this.edges[vertex] = [];
    }

    removeVertex(vertex) {
        //Find the index of the vertex you want to remove in the vertices array.
        const index = this.vertices.indexOf(vertex);

    }

}