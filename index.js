function HashMap(initialCapacity = 16, loadFactor = 0.75) {
  let buckets = Array(initialCapacity).fill(null);
  let capacity = initialCapacity;
  let size = 0;

  function hash(key) {
    if (!key) {
      throw new Error("No key provided");
    }

    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function set(key, value) {
    let index = hash(key) % capacity;

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (!buckets[index]) {
      buckets[index] = [];
    }

    // Check if the key already exists and update the value
    for (let i = 0; i < buckets[index].length; i++) {
      if (buckets[index][i][0] === key) {
        buckets[index][i][1] = value;
        return;
      }
    }

    buckets[index].push([key, value]);
    size++;

    calculateWhenToGrowBucketSize();
  }

  function calculateEntries() {
    return loadFactor * capacity;
  }

  function calculateWhenToGrowBucketSize() {
    if (size >= calculateEntries()) {
      growBucketSize();
    }
  }

  function growBucketSize() {
    let newCapacity = capacity * 2;
    const newBuckets = Array(newCapacity).fill(null);

    //  Rehash the entries
    buckets.forEach((bucket) => {
      if (bucket != null) {
        bucket.forEach(([key, value]) => {
          let newIndex = hash(key) % capacity;

          // Throw an error if we try to access an out of bound index
          if (newIndex < 0 || newIndex >= buckets.length) {
            throw new Error("Trying to access newIndex out of bound");
          }

          if (newBuckets[newIndex] === null) {
            newBuckets[newIndex] = [];
          }
          newBuckets[newIndex].push([key, value]);
        });
        buckets = newBuckets;
        capacity = newCapacity;
      }
    });
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key
  function get(key) {
    let index = hash(key) % capacity;

    // Throw an error if we try to access an out of bound index
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access newIndex out of bound");
    }

    if (!buckets[index]) {
      return null;
    }

    for (let i = 0; i < buckets[index].length; i++) {
      if (buckets[index][i][0] === key) {
        return buckets[index][i][1];
      }
    }
    return null;
  }

  function remove(key) {
    let index = hash(key) % capacity;

    // Throw an error if we try to access an out of bound index
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access newIndex out of bound");
    }

    if (!buckets[index]) {
      return false;
    }

    for (let i = 0; i < buckets[index].length; i++) {
      if (buckets[index][i][0] === key) {
        buckets[index].splice(i, 1);
        size--;
        return true;
      }
    }
  }

  //  has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  function has(key) {
    let index = hash(key) % capacity;

    // Throw an error if we try to access an out of bound index
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (!buckets[index]) {
      return null;
    }

    for (let i = 0; i < buckets[index].length; i++) {
      if (buckets[index][i][0] === key) {
        return true;
      }
    }
    return false;
  }

  return { hash, set, get, remove, has };
}

module.exports = { HashMap };
