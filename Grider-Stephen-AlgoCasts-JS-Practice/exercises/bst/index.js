// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        // handle less than current node w. left child
        if(data < this.data && this.left){
            this.left.insert(data)
        // handle less than current node w/o left
        } else if (data < this.data) {
            this.left = new Node(data)

        // handle greater than current node w. right child
        }else if(data > this.data && this.right) {
                this.right.insert(data);
        // handle greater than current node w/o right
            } else if(data > this.data){
                this.right = new Node(data)
            }
        }

    contains(data){
        if(this.data === data){
            return this;
        }

        if (this.data < data && this.right){
            return this.right.contains(data);
        } else if (this.data > data && this.left){
            return this.left.contains(data)
        }
        return null;
        }
}

module.exports = Node;
