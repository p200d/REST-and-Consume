export const mutateData = (country, dataType, data) => {
    console.log(`Country: ${country} | dataType: ${dataType}`);
    if (dataType === 'addresses')
        return handleAddresses(country, data);
    if (dataType === 'companies')
        return handleCompanies(country, data);
    if (dataType === 'persons')
        return handlePersons(country, data);
    return {};
}

const handleAddresses = (country, data) => {
    let addressArray = data.filter((dataObj) => { 
        return dataObj.country == country;
        }).map((dataObj) => {
            return { 
                country: dataObj.country, 
                city: dataObj.city, 
                street: dataObj.street, 
                streetName: dataObj.streetName,
            };
        })
    return addressArray;
}

const handleCompanies = (country, data) => {
    let companiesArray = data.filter((dataObj) => {
        return dataObj.country == country;
    }).map((dataObj) => {
        return {
            name: dataObj.name,
            country: dataObj.country,
            website: dataObj.website,
        };
    })
    return companiesArray;
}

const handlePersons = (country, data) => {
    let personsArray = data.filter((dataObj) => {
        return dataObj.address.country == country;
    }).map((dataObj) => {
        return {
            firstname: dataObj.firstname,
            lastname: dataObj.lastname,
            email: dataObj.email,
            country: dataObj.address.country,
        };
    })
    return personsArray;

    // firstname, lastname, email, address.country
}