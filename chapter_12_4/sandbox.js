// async & await

const getTodos = async () => {

    const response = await fetch('json/luigis.json');

    if (response.status !== 200) {
        throw new Error('Cannot Fetch the Data');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err));