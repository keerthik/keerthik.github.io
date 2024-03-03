const padArray = (array, length, start, padValue) => {
    if (array.length > length) {
        throw new Error("Array is too long");
    }
    const paddedArray = new Array(start).fill(padValue);
    paddedArray.push(...array);
    paddedArray.push(...new Array(length - array.length - start).fill(padValue));
    return paddedArray;
}

export { padArray };

