
class Node {
    constructor(value,next=null,prev=null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class CircularLL{
    constructor(value){
        let node = new Node(value)
        this.length = 1;
        this.head = node;
        this.tail = node ;
    }
    append(value){
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        let newNode = new Node(value);
        this.tail.next = newNode;
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head = newNode;
        this.length++;
    }
    insertAtPosition(value,n){
        if(n <= 1){
            this.prepend(value)
        }else if(n > this.length){
            this.append(value)
        }
        let prevNode = this.findNode(n-1);
        let node = new Node(value);
        node.prev =prevNode;
        node.next = prevNode.next;
        prevNode.next.prev = node;
        prevNode.next = node;
        this.length++;

    }
    findNode(n){
        let data = this.head,count = 1;
        while(data){
            if(count == n){
                break;
            }
            count++;
            data = data.next;
        }
        return data;
    }
    print(){
        let data = this.head;
        let count = 0;
        while(data){
            console.log(data.value)
            if(count == this.length){
                break;
            }
            data = data.next;
            count++;
        }
    }
    update(value,n){
        let node = this.findNode(n);
        node.value = value;
    }
    delete(n){
        let prevNode = this.findNode(n-1);
        prevNode.next =prevNode.next.next;
        prevNode.next.prev = prevNode;
        this.length--;
    }
}

let list = new CircularLL(5);
list.append(20);
list.insertAtPosition(10,2)
list.update(15,2)
list.delete(2)
list