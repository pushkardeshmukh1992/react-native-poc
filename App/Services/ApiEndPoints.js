function getBusinessListing() {
    // return fetch('https://facebook.github.io/react-native/movies.json')
    var url = 'http://staging.api.sminq.com:8000/v1/user/business/search'
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4='
        },
        qs: {
            cityId: 1,
            categoryId: 1,
            page: 1,
            limit: 900
        }
    })
}

function getDestinations() {
    // return fetch('https://facebook.github.io/react-native/movies.json')
    var url = 'http://139.59.14.228:8080/destination'
    return fetch(url, {
        method: 'GET'
    })
}

function getDestination(id) {
    // return fetch('https://facebook.github.io/react-native/movies.json')
    var url = 'http://139.59.14.228:8080/destination/' + id
    return fetch(url, {
        method: 'GET'
    })
}

export default {
    getBusinessListing: getBusinessListing,
    getDestinations: getDestinations,
    getDestination: getDestination
}