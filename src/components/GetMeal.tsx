import { useDispatch } from "react-redux";
import { fetchActions } from "../features/randommeal";


function GetMeal() {

    const dispatch = useDispatch();

    async function fetchMeal() {
        dispatch(fetchActions.isfetching());

        const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();

            const randomMeal = json.meals[0].strMeal;
            console.log(randomMeal);

            dispatch(fetchActions.success(randomMeal));

        } catch {
            console.log('error');
            dispatch(fetchActions.failure());
        }

    }



    return (
        <section>
            <button onClick={() => fetchMeal()}>Get meal tip!</button>
        </section>
    )
}

export default GetMeal;