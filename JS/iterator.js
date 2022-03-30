const array = ['a', 'b', 'c','c'];
    
const it = array[Symbol.iterator]();
 
console.log(it.next());
  
console.log(it.next());

  
console.log(it.next());

console.log(it.next());
console.log(it.next());
console.log(it.next());