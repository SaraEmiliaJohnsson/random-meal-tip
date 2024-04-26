import { useSelector } from "react-redux";
import { RootState } from "../main";
import { MealTipStatus } from "../features/randommeal";


function RandomMeal() {

    const randomMeal = useSelector((state: RootState) => state.RandomMeal);

    let content: string | null = null;

    switch (randomMeal.status) {
        case MealTipStatus.NORMAL:
            content = 'Ready for a meal';
            break;
        case MealTipStatus.FETCHING:
            content = 'Wating for meal';
            break;
        case MealTipStatus.SUCCESS:
            content = randomMeal.fact;
            break;
        default:
            content = 'No Meal available'
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default RandomMeal;