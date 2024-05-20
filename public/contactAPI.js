export const contactAPI = (resource) => {
    let fetchRes = fetch(`https://fakerapi.it/api/v1/${resource}?_quantity=1000`);

    fetchRes
        .then(res => res.json())
        .then(data => console.log(data));
}