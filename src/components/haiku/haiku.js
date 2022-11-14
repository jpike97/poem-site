
export default function Haiku(props) {
  const haiku = props.haiku;
  console.log("props are ", props);
  const handleHaikuLike = (haikuId) => {
      console.log("haiku ID for liking is", haikuId);
  }

  const handleHaikuComment = (haikuId) => {
    console.log("haiku ID for commenting is ", haikuId);
  }
  return <div className="haiku__wrapper">
          {haiku.haikuText}
          <div className="haiku__comments">

          </div>
          <button onClick={() => handleHaikuLike(haiku.haikuId)}>Like Haiku</button>
          <button onClick={() => handleHaikuComment(haiku.haikuId)}>Comment on Haiku</button>
        </div>;
}
