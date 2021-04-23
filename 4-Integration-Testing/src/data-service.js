import fetch from 'node-fetch';

export default class DataService {
    constructor(url, endPointName) {
        this.url = url;
        this.endPointName = endPointName;
    }

    async load() {
        try {
            const response = await fetch('${this.url}/${this.endPointName}', {});
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    save(issue) {
        const data = JSON.stringify(issue);
        return fetch('${this.url}/${this.endPointName}', {
            method: 'POST',
            body: data,
        });
    }
}
