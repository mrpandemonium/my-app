import bruschetta from "../Images/bruchetta.svg";
import lemon from "../Images/lemon.jpg";
import salad from "../Images/salad.jpg";
function Specials() {
  return (
    <>
      <h1>This Week's Specials!</h1>
      <section>
        <article>
          <img src={salad} height={"330px"} width={"200px"} />
          <h1>Food 1</h1>
          <p>
            Aenean feugiat sodales nibh quis ornare. Curabitur eget tempus mi,
            vel pretium massa.Aenean feugiat sodales nibh quis ornare. Curabitur
            eget tempus mi, vel pretium massa.Aenean feugiat sodales nibh quis
            ornare.
          </p>
        </article>
        <article>
          <img src={bruschetta} height={"330px"} width={"200px"} />
          <h1>Food 1</h1>
          <p>
            Aenean feugiat sodales nibh quis ornare. Curabitur eget tempus mi,
            vel pretium massa.Aenean feugiat sodales nibh quis ornare. Curabitur
            eget tempus mi, vel pretium massa.Aenean feugiat sodales nibh quis
            ornare.
          </p>
        </article>
        <article>
          <img src={lemon} height={"330px"} width={"200px"} />
          <h1>Food 1</h1>
          <p>
            Aenean feugiat sodales nibh quis ornare. Curabitur eget tempus mi,
            vel pretium massa.Aenean feugiat sodales nibh quis ornare. Curabitur
            eget tempus mi, vel pretium massa.Aenean feugiat sodales nibh quis
            ornare.
          </p>
        </article>
      </section>
    </>
  );
}
export default Specials;
