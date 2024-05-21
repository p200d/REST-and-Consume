export async function contactAPI(resource) {
    let response, data;
    try {
        response = await fetch(`https://fakerapi.it/api/v1/${resource}?_quantity=1000`)
    } catch (e) {
        return console.error(e);
    }

    data = await response.json();
    return data;
}