import { useLocation, Link } from "react-router-dom";

const Shit = (props) => {
    const location = useLocation();
    const state = location.state;
    console.log(state);
    return (
        <>
        ce pula mea ba
      {(
        <div>
          <h3>Passed data:</h3>
          <p>From: {state.from}</p>
          <p>id: {state.id}</p>
          <p>message: {state.message}</p>
        </div>
      )}
    </>
    )
}

export default Shit;