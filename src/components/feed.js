import { useEffect } from "react";
import UserContext from "../context/user";

import useHaikus from "../hooks/use-unliked-haikus";

export default function Feed() {
  const { likedHaikus, unlikedHaikus } = useHaikus();
  console.log("haikus in the display here");
  console.log(likedHaikus, unlikedHaikus);
  return <div className="haikus__wrapper"></div>;
}
