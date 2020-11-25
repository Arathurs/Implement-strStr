/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    // Keep track of needle length by assigning to var l
    let l = needle.length;
    // Immediately return 0 if needle is an empty string. Allowing this
    // script to fail fast in cases of invalid needle input.
    if(!l) return 0;
    // Iterate over the string using a for loop, and attempt to find
    // a match for each possible substring. The variable l will be used to keep
    // track of the proper string length to compare each possible substring.
    for (let i = 0; i < haystack.length; i++) {
         // Pass the current index (which would be the beginning of the substring)
        // and i + l (the end of the substring) into the slice method called
        // haystack. If a match if found, assign it to and return l. This will
        // cause the algorithm to fail fast and return the current index as soon
        // as a match is found
        if (haystack.slice(i, i + l) === needle) return l = i;
    }
    // At this point, only one possible return value remains. If the needle was
    // found, it was already returned. Likewise, the case of an empty string is
    // already taken care of. The only solution left is no string was found.
    // Simply return -1.
    return -1;
};