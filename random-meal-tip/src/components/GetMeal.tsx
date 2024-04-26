

function GetMeal() {

    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error('Error fetching data: ', err));

    return (
        <section>
            <button>Get meal tip!</button>
        </section>
    )
}

export default GetMeal;