import UserContext from "../../context/user";
import { useContext, useState } from "react";
import { validateHaiku } from "../../helpers/validateHaiku";
import HaikuPostInput from "./haikuPostInput";

export default function PostBtn() {
  const [haikuText, setHaikuText] = useState("");
  const [haikuPostInputVisible, setHaikuPostInputVisible] = useState(false);
  const {
    user: { uid: userId = "" }
  } = useContext(UserContext);

  return (
    <div className="post__wrapper">
      <button onClick={() => setHaikuPostInputVisible(true)}>
        Post for haiku, user ID is {userId}
      </button>
        <div className={`post__input ${haikuPostInputVisible ? 'active' : ''}`}>
          <button onClick={() => setHaikuPostInputVisible(false)}>
            Close HaikuPostInput
          </button>
          <HaikuPostInput />
        </div>
    </div>
  );
}
