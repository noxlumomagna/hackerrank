function diagonalDifference(arr) {
    let forwardIndex = 0;
    let backwardsIndex = arr.length - 1;
    let forwardCount = 0;
    let backwardsCount = 0;
    for (let i = 0; i < arr.length; i++) {
        forwardCount += arr[i][forwardIndex];
        backwardsCount += arr[i][backwardsIndex];
        forwardIndex++;
        backwardsIndex--;
    }
    return Math.abs(forwardCount - backwardsCount);
}
