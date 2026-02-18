var groupAnagrams = function(strs) {
    const map = new Map()
     for( let str of strs){
        // Create key by sorting characters
        const key = str.split('').sort().join('')

                if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
     
}

let anagram = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
console.log(anagram)
