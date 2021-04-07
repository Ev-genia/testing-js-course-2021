export default class Numbers{
    removeFalsyValues(array) { 
        if (!Array.isArray(array)){
            throw new Error('Argument should be an array');
        }
        return array.filter(val => !!val);  
    }
}

