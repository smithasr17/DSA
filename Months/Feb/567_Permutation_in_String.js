var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    // Fill frequency for s1 and first window of s2
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Helper function to compare arrays
    function matches(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    if (matches(count1, count2)) return true;

    // Sliding window
    for (let i = s1.length; i < s2.length; i++) {
        count2[s2.charCodeAt(i) - 97]++; // add new char
        count2[s2.charCodeAt(i - s1.length) - 97]--; // remove old char

        if (matches(count1, count2)) return true;
    }

    return false;
};

const result = checkInclusion("ab", "eidbaooo")
console.log(result)