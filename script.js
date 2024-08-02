const form = document.querySelector('#search-form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Form submitted');

    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res)

    displayImgs(res.data);
    form.elements.query.value = '';
})

const displayImgs = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}