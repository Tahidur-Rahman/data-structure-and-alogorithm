function isPalindrome(word) {
    let i = 0,
      j = word.length - 1;
    while (i <= j) {
      if (word[i] != word[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

var firstPalindrome = function (words) {
    let word;
  for (let x = 0; x < words.length; x++) {
     word = words[x];
     let result = isPalindrome(word);
     if(result) return word;
    
  }
  return "";
};

console.log(firstPalindrome(["knywrurkwbrtpalvuuzbczcwzpdqibcwwyflwiddixemsrwblupyerjgvcpavdjfhmujitcsmdbvhxw","ovkeowhqvwlndtpxdnimgietvjsqydbuuwmxkfxxgn","damomwtjugmsrfyvytaheg","bngqatscosdakdwjz","jwzcowuantgqlzjrzgpapcugxvviltrhmcwijtpqapmxjfcilrsmsbeffphcxmaozlczncoxxjmuqijhidxqinhywrtah","ujvoejixvaioikkwzxgtmkchckrigfejjpheiiehpjjefgirkchckmtgxzwkkioiavxijeovju","kacjvcouuigbhydrryaperxvjetwsycmnlkxujaqngjhhotqskclquklxsozfryfxwiksstmropcdvhgsnosgvltqo","qrbsdxxolwzmyltproznfgyydxkkejwdiwpvfzvjoxqvwguoerhclytzvolymbxummwsoqtttyttik","tkekt","esrshrlfoihhjrouleucwpeubygivoatrfraphgwpvtkanwu","kwzrfelynncvsrwvaukiinhjdydmlimggjldhflygemzwnjizzlsuqwahsufwmwhfjkjpngdfsudyavtogoaqzknpew","sdgpcnvsbzxhyjt"]));
