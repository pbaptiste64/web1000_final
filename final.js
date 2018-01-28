//1 What are the four steps of mergesort?

// 0. Recognize base case
// 1. Divide: break problem down during each call
// 2. Conquer: do work on each subset
// 3. Combine: solutions 

 

//2 Using Javascript, generate a random between 50 and 100.

console.log(Math.floor(Math.random()* 51 + 50));

//3. Using Javascript, generate a random number between -100 and 100.

console.log(Math.ceil(Math.random() * 100 - 100));

// 4. Write a coin flip function. It should return the string "heads" half the time
// and the string "tails" the other half

function coinFlip(){
    if(Math.floor(Math.random() * 2) - 1 === 0){
       return ("Heads");
     }else{
       return ("Tails");
   }
}
coinflip();
     

// 5. Re-state the following expression without using negation:
//   !(10 > x)
    (10 <= x)

// 6. Re-state the following expression without using negation:
//   !(a > 10 && b <= 5)
    (a <= 10 || b > 5)

// 7. Re-state the following expression without repeating variable a:
//   (a && x <= 10) || (a && y < 0)
    (a || x <= 10 && y < 0)

// 8. Re-state the following expression without negations:
//   !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )
   (a <= 10) && (b <= 10) && (c <= 10) && (isAdmin)

// 9. Write a function which, given a 2-d arrayay of strings, returns the concatenation of all the strings.
// 
let array = [['blue', 'red', 'green'], ['yellow', 'purple', 'orange']];

function concat(array) {
    let string = '';
    for(let i = 0; i < array.length; i++){
        for(let k = 0; k < array[1].length; k++){
            string += array[i][k]
        }
    }
    return string;
}
concat(array);

// 10. Write a function which, given a 2-d arrayay and another value x, returns true if x is present in the 2-d arrayay, and false otherwise.
// A.
function questionTen(array, x) {
    for(let i = 0; i < array.length; i++){
        for(let k = 0; k < array[1].length; k++){
            if(array[i][k] === x){
                return true
            }
        }
    }
    return false;
}
questionTen(array, x);

// 11. Write a function which, given an two sorted arrayays of sizes m and n, returns a larger sorted arrayay of size m+n. This function must work in O(m+n) time.
// A.
function eleven(m,n){
    return `${m},${n}`;
}
eleven(m,n);

// 12. Given the following edge list, draw the graph. Use MS Paint and include the file in your repo.

// ```javascript
// E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ]
// ```

// 13. Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.

// ```javascript
// M = [
//   [0,0,1,0,1],
//   [0,0,0,0,1],
//   [0,1,0,0,0],
//   [0,1,0,0,0],
//   [0,0,0,0,1],
// ]
// ```

// 14. For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?


// 9. O(N^2) <--- answer
// 10. O(N^2) <--- answer

// 15. What is the time complexity of the following function?
// --- O(N) <--- this is the answer

// ```javascript
//   function thugPop(array){
//     var ret = [];                                    O(1)
//     for (var i === 0; i < array.length; i++){          O(N2)
//       if (array[i] % 15 == 0) ret.push('thugPop');     O(1)
//       else if (array[i] % 5 == 0) ret.push('thug');    O(1)
//       else if (array[i] %3 == 0 ) ret.push('pop');     O(1)
//       else ret.push(array[i]);                         O(1)
//     }
//     return ret;                                      O(1)
//   }
// ```

// 16. What is the time complexity of the following function?

// --- 0(N^2) <--- this is the answer

// ```javascript
//   function thugify(schoolList){
//     return schoolList.map(function(schoolObj){               O(N)
//       var school = Object.assign({}, schoolObj);             O(1)
//       school.students.forEach(function(student){             O(N)
//         if (Math.random() > 0.5){
//           student.lastName += 'dogg';                        O(1)
//         }
//         else {
//           student.firstName = "lil' "+ student.firstName;    O(1)
//         }
//       });
//     });
//   }
// ```

// 17. What is the time complexity of the following function?

//-- O(N^2) <--- This is the answer

// ```javascript
//   function countRepeats(strarray){
//     var repeats = 0;                                                 0(1)
//     strarray.forEach(function(str, index){                             0(N)
//       var currentRepeats = strarray.filter(function(innerStr, idx){    0(N)
//         return (innerStr === str && index != idx)                    0(1)
//       });
//       if (currentRepeats.length > 0){                                
//         repeats++;                                                   0(1)
//       }
//     });
//     return repeats;                                                  0(1)
//   }
// ```

// 18. What are the main operations of a stack?
// In a nut shell, the last item to go into the stack will be the first one removed from the stack.
// Stack also utilizes the push method to put an item into the back of the storage and uses the
// pop to take out the last item put into the storage.

// 19. What are the main operations of a queue?
// The first item to go into the queue will be the first one taken out of the queue.
// Queue utilizes the enqueue method to add to the tail and push an item into the storage. The
// dequeue method is used to add to to the head and remove the first item added.

// 20. What is the runtime of bubblesort? How does it work?
// A. Runtime ---> O(n^2)
// 1. the Bubblesort function loops through a list comparing two elements and swaps higher element with the lower element to the end 

// 21. Create a personal website and upload it so that it is accessible at yourdomain.fvi-grad.com.  
//     1. The website must have your name, contact information, skills, and at least two links to portfolio items you are hosting on fvi-grad.
//     2. The website must not be in a subdirectory of the document root. ie. It needs to be accessible by going to yourusername.fvi-grad.com/ without anything after the slash.
//     3. You can and should use a template
//     4. Include the link to your website in your answers document
// LINK: http://pbaptiste.fvi-grad.com/