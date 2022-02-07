import useUser from "../../hooks/use-user";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function Sidebar() {
  const {
    user: { fullName, username, userId }
  } = useUser();

  //console.log();
  return (
    <div className="sidebar">
      <div className="sidebar__button">
        <FavoriteIcon fontSize="large" />
        <p>300</p>
      </div>
      <div className="sidebar__button">
        <MessageIcon fontSize="large" />
        <p>300</p>
      </div>
    </div>
  );
}
