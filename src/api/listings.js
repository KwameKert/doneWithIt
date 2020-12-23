import client  from './client';

const endpoint = "/listings";

async function fetchListings () {
    return client.get(endpoint);
}


export default{
    fetchListings
}