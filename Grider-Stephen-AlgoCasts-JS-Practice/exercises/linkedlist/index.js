// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAt(data, index) {
        // if list is empty
        if (!this.head) {
            this.head = new Node(data);
            return;
          }
      
        // if inserting at first node
          if (index === 0) {
            this.head = new Node(data, this.head);
            return;
          }

        // if inserting later in list
          const previous = this.getAt(index - 1) || this.getLast();
          const node = new Node(data, previous.next);
          previous.next = node;
        }

    

    insertFirst(data) {
       this.head = new Node(data, this.head);
     }

    insertLast(data) {
        const last = this.getLast();

        if(last) {
            // last.next = new Node(data);
            this.insertAt(data, last.next)
        } else {
            //this.head = new Node(data);
            this.insertFirst(data);
        }
    }

    size(){
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    
    getAt(index){
        if (!this.head){
            return null;
        }

        let counter = 0;
        let node = this.head;
        while(node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        // if(!this.head){
        //     return null;
        // }

        // let node = this.head;
        // while(node){
        //     if (!node.next){
        //         return node;
        //     }
        //     node = node.next;
          
        // }
        return this.getAt(this.size()- 1);
    }

    clear() {
        this.head = null;
    }

    removeAt(index){
        if (!this.head){
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if(!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    removeFirst() {
        // if(!this.head){
        //     return null;
        // }

        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast(){
        // // for empty list
        // if(!this.head){
        //     return;
        // }

        // // for list length one
        // if(!this.head.next){
        //     this.head = null;
        //     return;
        // }

        // // for list longer than one
        // let previous = this.head;
        // let node = this.head.next;
        // while(node.next){
        //     previous = node;
        //     node = node.next
        // }
        // previous.next = null;
        this.removeAt(this.size() - 1);
    }

    forEach(fn) {
        let node = this.head;
        while(node){
            fn(node);
            node = node.next;            
        }
    }   


      *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}


module.exports = { Node, LinkedList };
