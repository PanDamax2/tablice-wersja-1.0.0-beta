import { BACK_END_URL } from "../constants/api"

export const fetchData = async (method, data, endpoint) => {
    let endpointURL = `${BACK_END_URL}/${endpoint}`
    if (method !== 'POST') {
        endpointURL += `/${data.id}`
    }

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method !== 'DELETE') {
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(endpointURL, options)
        if (!response.ok) {
            throw new Error(
                `HTTP error! status: ${response.status}, method: ${method}, url: ${endpointURL}`
            );
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}
