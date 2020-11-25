/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    let l = needle.length;
    if(!l) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + l) === needle) return l = i;
    }
    return -1;
};