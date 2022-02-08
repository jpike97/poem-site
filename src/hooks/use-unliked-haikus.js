import UserContext from "../context/user";
import {
  getUserByUserId,
  getAllUnlikedHaikus,
  getAllLikedHaikus
} from "../services/firebase";

import { useState, useEffect, useContext } from "react";

export default function useHaikus() {
  const [likedHaikus, setLikedHaikus] = useState(null);
  const [unlikedHaikus, setUnlikedHaikus] = useState(null);
  const {
    user: { uid: userId = "" }
  } = useContext(UserContext);

  useEffect(() => {
    async function getHaikus() {
      const user = await getUserByUserId(userId);
      const likedHaikusIds = user[0].likedHaikus;
      const unlikedHaikus = await getAllUnlikedHaikus(likedHaikusIds);
      const likedHaikus = await getAllLikedHaikus(likedHaikusIds);
      setUnlikedHaikus(unlikedHaikus);
      setLikedHaikus(likedHaikus);
    }
    getHaikus();
  }, []);
  return { unlikedHaikus: unlikedHaikus, likedHaikus: likedHaikus };
}
