/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) return image;
    helper(image, sr, sc, image[sr][sc], newColor);
    return image;
};

const helper = (image, sr, sc, color, newColor) => {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== color) return;
    image[sr][sc] = newColor;
    helper(image, sr + 1, sc, color, newColor);
    helper(image, sr - 1, sc, color, newColor);
    helper(image, sr, sc + 1, color, newColor);
    helper(image, sr, sc - 1, color, newColor);
}
