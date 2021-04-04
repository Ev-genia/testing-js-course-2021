export default class Numbers{
    removeFalsyValues(array) { 
        return array.filter(val => !!val);  
    }
}

