import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem";

const requestConfig = {};
export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");
  //     if (!response.ok) {
  //     }
  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Error Occured" message={error}></Error>;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
