
addToZero = (array) => {
    let value = false
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
       }
      } 
    }
  }
  console.log(value)
}

addToZero([2,-2])
///// 1) this would be 0(n)/////

hasUniqueChars = (word) => {

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if(word[i] === word[j]){
                console.log(true)
            return
                
            }

        }
    }
}
hasUniqueChars("boy")
/////0(n^2)///////

isPangram = (str) => {
    let newArr = []
    for(let i = 0; i < str.length; i++){
        let letter = str[i]
        if (!newArr.includes(letter)) {
            newArr.push(letter)
        }
        
    }
    if(newArr.length === 26){
        console.log(true)
    } else{
        console.log(false)
    }
}

isPangram("I like cats, but not mice")

/////////O(n^2)//////////////


findLongestWord = (array) => {
let max = 0
    for(let i = 0; i < array.length; i++) {
        let word = array[i]
        if(max < word.length){
            max = word.length
        }
    }
    console.log(max)
}

findLongestWord(["hi", "hello"])