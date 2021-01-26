const times10 = (n) => (n * 10);

console.log('----------TASK ONE------------');
console.log('times10 returns', times10(9));

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log('fetching from cache', n);
    return cache[n];
  } else {
    console.log('Calculating result');
    let result = times10(n);
    cache[n] = result;
    return result;
  }
};

console.log('----------TASK TWO------------');
console.log('times10 returns', memoTimes10(9));
console.log('times10 returns', memoTimes10(9));

// Clean Up the global scope by moving the cache inside the function.

const memoizedClosureM = (m) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('fetching..., n');
      return cache[n];
    } else {
      console.log('cal... result');
      let result = n * m;
      cache[n] = result;
      return result
    }
  };
};

const memoClosure10 = memoizedClosureM(10);
const memoClosure3 = memoizedClosureM(3)
console.log(memoClosure10(2), memoClosure3(2))

// This is the underliying technique that powers functional programing paradigm.
console.log(memoClosure10(4), memoClosure3(33))


// Returning functions as calbacks
const memoize = (cb) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('fetching...again', n);
      return cache[n];
    } else {
      console.log('calculating again... ');
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};




const memoizedTimes10 = memoize(times10);
console.log('--------------TASK FOUR---------------------')
console.log(memoizedTimes10(9))
console.log(memoizedTimes10(9))
try {
  
} catch (e) {
  console.log('task four', e)
}













