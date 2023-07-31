import "../App.css";
import chef from "../Images/restauranfood.jpg";
function Main() {
  return (
    <main>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at odio mi.
        Sed sed finibus lorem, eget condimentum orci. Aenean feugiat sodales
        nibh quis ornare. Curabitur eget tempus mi, vel pretium massa. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Ut at odio mi. Sed
        sed finibus lorem, eget condimentum orci. Aenean feugiat sodales nibh
        quis ornare. Curabitur eget tempus mi, vel pretium massa. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Ut at odio mi. Sed sed
        finibus lorem, eget condimentum orci. Aenean feugiat sodales nibh quis
        ornare. Curabitur eget tempus mi, vel pretium massa.
      </p>
      <img src={chef} height={"330px"} width={"200px"} className="chef" />
      <button className="reserve">Reserve Table</button>
    </main>
  );
}
export default Main;
