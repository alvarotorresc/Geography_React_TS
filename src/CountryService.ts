import axios from 'axios'


class CountryService {
    private static url: string = "https://restcountries.eu/rest/v2/all";
    private static urlOne: string = "https://restcountries.eu/rest/v2/alpha/"
    public static async getCountries(): Promise<any> {
        const countries: [] = await axios.get(this.url);
        return countries;
    }

    public static async getCountry(id: any): Promise<any> {
        const urlNew =  this.urlOne + id;
        const countries: [] = await axios.get(urlNew);
        return countries;
    } 
}

export default CountryService;