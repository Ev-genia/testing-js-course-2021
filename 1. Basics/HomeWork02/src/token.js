// @ts-check

class StringToken {
    /**
     * @param {string} str
     */
    constructor (str) {
        this.str = str;
    }

    getToken() {
        if (this.str === '') {
            return null;
        }
        
        const text = this.str.split(' ');
        const token = text[1];
        console.log(token);
        
        const lenght = text[1].length;
        if (lenght < 10) { 
            let message = 'Token should be more then 10 elements';
            console.log(message);
            return null;
        // } else if () {
        //     Array.prototype.every()
        //     let message = 'Token should be more then 10 elements';
        //     console.log(message);
        //     return null;
        } else return text[1];
        

        
    }
}

export default StringToken;
