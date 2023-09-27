module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    let result = matrix.flatMap((row, index) =>
        index % 2 === 0 ? row : row.reverse()
    );
    return result;
};
