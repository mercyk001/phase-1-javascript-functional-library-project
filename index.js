// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i]));
    }
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc === undefined ? values[0] : acc;
    const startIndex = acc === undefined ? 1 : 0;
    for (let i = startIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
  }
  
  // myFind
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  
  // mySize
  function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.keys(collection);
    return values.length;
  }
  
  // Array Functions
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  // Object Functions
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  // Example function calls
  console.log(myEach([1, 2, 3], alert)); // alerts each number in turn and returns the original collection
  console.log(myEach({one: 1, two: 2, three: 3}, alert)); // alerts each number value in turn and returns the original collection
  
  console.log(myMap([1, 2, 3], function(num){ return num * 3; })); // => [3, 6, 9]
  console.log(myMap({one: 1, two: 2, three: 3}, function(num){ return num * 3; })); // => [3, 6, 9]
  
  console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10)); // => 16
  console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; })); // => 6
  
  console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // => 2
  console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; })); // => 4
  
  console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // => [2, 4, 6]
  console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })); // => []
  
  console.log(mySize({one: 1, two: 2, three: 3})); // => 3
  console.log(mySize([])); // => 0
  
  console.log(myFirst([5, 4, 3, 2, 1])); // => 5
  console.log(myFirst([5, 4, 3, 2, 1], 3)); // => [5, 4, 3]
  
  console.log(myLast([5, 4, 3, 2, 1])); // => 1
  console.log(myLast([5, 4, 3, 2, 1], 3)); // => [3, 2, 1]
  
  console.log(mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) })); // => [5, 4, 6, 3, 1, 2]
  const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  console.log(mySortBy(stooges, function(stooge){ return stooge.name })); // => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}]
  
  console.log(myFlatten([1, [2], [3, [[4]]]])); // => [1, 2, 3, 4]
  console.log(myFlatten([1, [2], [3, [[4]]]], true)); // => [1, 2, 3, [[4]]]
  
  console.log(myKeys({one: 1, two: 2, three: 3})); // => ["one", "two", "three"]
  console.log(myValues({one: 1, two: 2, three: 3})); // => [1, 2, 3]