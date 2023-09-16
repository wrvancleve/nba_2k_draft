export function shuffle(array) {
    let shuffled = array.slice(0), i = array.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0);
}

export function sample(array, size) {
    let shuffled = array.slice(0), i = array.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

export function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
