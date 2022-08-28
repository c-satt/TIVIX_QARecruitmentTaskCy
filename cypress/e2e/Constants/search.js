const searchUserInput = {
    country: '#country',
    city: '#city',
    model: '#model',
    pickup: '#pickup',
    dropoff: '#dropoff',
    searchbtn: '.btn-primary',
    alertMessage: '.alert-danger'
};

const searchTable = {
    table: '#search-results',
    results: 'tbody',
    individualRow: 'tr',
};

const errorMessageVerbiage = {
    validDates: 'Please fill pickup and drop off dates'
};

const searchPageDefaultSettings = {
    country: 3,
    city: 3,
    model: 'Model'
};

export {
    searchUserInput,
    searchTable,
    errorMessageVerbiage,
    searchPageDefaultSettings
};