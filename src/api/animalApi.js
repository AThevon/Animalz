import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://api.api-ninjas.com/v1/animals';

export async function fetchAnimalData (name) {
    const url = `${apiUrl}?name=${name}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    } 
};
