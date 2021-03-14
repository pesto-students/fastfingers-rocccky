import Words from '../../data/Words.js';

const getRandomWord = (array) => {
    return array[Math.floor(Math.random() * (array.length-1))]
}
const CONFIG_LEVEL = {
    "Easy" : 1,
    "Medium" : 1.5,
    "Hard" : 2
}
const GetWord = (props) => {
    const {level} = props;
    const {easyWords, mediumWords, hardWords} = Words();
    let newWord = "";
    console.log(level);
    if(level < CONFIG_LEVEL.Medium){
        newWord = getRandomWord(easyWords);
    }else if(level < CONFIG_LEVEL.Hard){
        newWord = getRandomWord(mediumWords);
    }else{
        newWord = getRandomWord(hardWords);
    }
    
    return newWord
}

export default GetWord
