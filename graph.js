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
        if (index >= 0) {
            // Remove the vertex with the found index from the vertices array.
            this.vertices.splice(index, 1);
        }
        // If the values of the vertex in the edge's array has data.
        while (this.edges[vertex].length) {
          // Find the adjacent vertex by getting the last value of the array.
          const adjacentVertex = this.edges[vertex].pop();
          this.removeEdge(adjacentVertex, vertex);
        }
    }

    addEdge(vertex1, vertex2) {
        //Add vertives to edges array and increment number of edges.
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;

    }

    removeEdge(vertex1, vertex2) {
        // find indeces of verteces.
        const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
        if (index1 >=0) {
            // Remove the vertex witht the specific index from the edges vertex1 array.
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }
        if(index2 >= 0) {
            this.edges[vertex2].splice(index2, 1);
        }
    }

    size() {
        return this.vertices.length;
    }

    relations() {
        return this.numberOfEdges;
    }

    traverseDFS(vertex, fn) {
        //Depth - first search 
        if(this.vertices.indexOf(vertex) <0) {
            return console.log('No vertex, sorry');
        }
        //Pass empty array visited as arg to traverseDFS in order to start looping.
        const visited = [];
        this.traverseDFS(vertex, visited, fn);
    }

    traverseDFS(vertex, visited, fn) { 
        visited[vertex] = true;
        // Invoke func passed as arg on found vertex in edges array.
        if (this.edges[vertex] !== undefined) {
            fn(vertex);
        }
        // Loop over values of vertex in edges array . 
        for (let i = 0; i < this.edges[vertex].length; i++) { 
            if (!visited[this.edges[vertex][i]]) {
                // Invoke traverseDFC function with current vertex index
                // which leads to the function being invoked on every child in array.
                this.traverseDFS(this.edges[vertex][i], visited, fn);
            }
        }
    }

    traverseBFS (vertex, fn) {
        if (this.vertices.indexOf(vertex) < 0) {
            return console.log('No vertex, sorry');
        }
        const queue =[];
        // Push vertex to queue.
        queue.push(vertex);
        const visited = [];
        visited[vertex] = true;

        while (queue.length) {
            // Set vertex equal to first item in queue array.
            vertex = queue.shift();

        }


    }

}