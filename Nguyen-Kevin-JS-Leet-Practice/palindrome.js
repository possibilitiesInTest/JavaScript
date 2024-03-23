
function isParlindrome(s){
    s =s.toLowerCase().replace(/[^\w]/g, "");

    let left = 0;
    let right = s.length -1;

    while(left < right) {
        if (s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

