/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for(let el of candies){
        max = Math.max(max, el);
    }
    let res = [];
    for(let i = 0; i < candies.length; i++){
        candies[i] = max <= candies[i] + extraCandies;
    }
    return candies;
};