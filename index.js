function HashMap() {
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

  return { hash };
}

module.exports = { HashMap };
