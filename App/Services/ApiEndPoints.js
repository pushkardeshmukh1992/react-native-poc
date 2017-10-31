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

export default {
    getBusinessListing: getBusinessListing
}