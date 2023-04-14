
class HashTable{

    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    set(value){
        let index = this.hashFunction(value);
        let indexedArr = this.table[index];
        if(!indexedArr){
            indexedArr = [];
        }
        indexedArr.push(value);
        this.table[index] = indexedArr;
    }
    get(value){
        let index = this.hashFunction(value);
        let indexedArr = this.table[index];
        if(!indexedArr){
            return "Value not found!"
        }
        for(let i=0;i<indexedArr.length;i++){
            if(indexedArr[i] === value){
                return "Value found"
            }
        }
        return "Value not found!"
    }

    hashFunction(value){
        value = value + '';
        let sum = 0;
        for(let i = 0;i<value.length;i++){
            sum = sum + value.charCodeAt(i);
        }
        return sum % this.size;
    }
}

let hash = new HashTable(5);
hash.set(10);
hash.set(10);
hash.set(20);
hash.set(15);
hash.set(40);
console.log(hash.get(40));
console.log(hash.get(70));
console.log(hash.get(80));
hash
