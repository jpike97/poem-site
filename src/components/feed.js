import { useEffect } from "react";
import UserContext from "../context/user";
import Haiku from "../components/haiku/haiku";
import useHaikus from "../hooks/use-unliked-haikus";

export default function Feed() {
  const { likedHaikus, unlikedHaikus } = useHaikus();
  console.log("haikus in the display here");
  console.log(likedHaikus, unlikedHaikus);
  return (
    <div>
      {unlikedHaikus != null ? (
        <>
          <h1>data loaded</h1>
          {unlikedHaikus.map((haiku, i) => (
            <li key={i}>{haiku.haikuText}</li>
          ))}
        </>
      ) : (
        <>
          <h2>Loading....</h2>
        </>
      )}
    </div>
  );
}
