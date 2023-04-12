
// USING 2 QUEUES
class Node{
    constructor(data,next = null){
        this.value = data;
        this.next = next;
    }
}
class MyQueue{
    constructor(data){
        let node = new Node(data);
        this.head = node;
    }

}

class MyStack{
    constructor(){
        this.q1 = new MyQueue();
        this.q2 = new MyQueue();
    }
    push(x){

    }

    pop(){

    }

    top(){

    }

    empty(){

    }

}

let stack = new MyStack();

stack.push(1);
// stack.push(2);
// stack.top();
// stack.pop();
// stack.empty();
stack