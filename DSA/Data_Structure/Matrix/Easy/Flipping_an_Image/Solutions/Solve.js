/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++){
        let left = 0, right = image[i].length - 1;
        while(left < right){
            let temp = image[i][left] === 0 ? 1 : 0;
            image[i][left] = image[i][right] === 0 ? 1 : 0;
            image[i][right] = temp;
            left++, right--;
        }
        if(left === right) image[i][left] = image[i][right] === 0 ? 1 : 0;
    }
    return image;
};