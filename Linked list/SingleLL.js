// 10 => 20 => 30 => null

class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    let node = new Node(data);
    this.head = this.tail = node;
    this.length = 1;
    console.log(node);
  }

  // Add Value at first
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  // Add value at last
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  appendAtPosition(value, n) {
    if (n == 1) {
      this.prepend(value);
      return;
    } else if (n === this.length+1) {
      this.append(value);
    }
    let newNode = new Node(value);
    let prevNode = this.findNode(n - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
  }
  findNode(n) {
    let data = this.head;
    let count = 0;
    while (true) {
      count++;
      if (count == n) {
        break;
      }
      data = data.next;
    }
    console.log(data);
    return data;
  }

  print(){
    let data = this.head;
    while(data){
      console.log(data.value);
      data = data.next;
    }
  }
  update(value,n){
    let node = this.findNode(n);
    node.value = value;
  }
  delete (n){
    let node = this.findNode(n-1);
    node.next = node.next.next;
    this.length--;
  }
}

let list = new LinkedList(10);
list.append(20);
list.prepend(8);
list.appendAtPosition(9, 2);
list.appendAtPosition(2, 1);
list.appendAtPosition(211, 4);
list.update(1,4)
list.print()
