import Data from './dictionary.json';


const Words = () => {
    const easyWords = [];
    const mediumWords = [];
    const hardWords = [];

    for(let word of Data){
        if(word.length <= 4){
            easyWords.push(word);
        }else if(word.length <= 8){
            mediumWords.push(word);
        }else{
            hardWords.push(word);
        }
    }

    return {easyWords, mediumWords, hardWords};
}

export default Words
