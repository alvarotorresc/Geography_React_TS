import axios from 'axios'


class CountryService {
    private static url: string = "https://restcountries.eu/rest/v2/all";



    public static async getCountries(): Promise<any> {
        const countries: [] = await axios.get(this.url);
        return countries;
    }
}

export default CountryService;