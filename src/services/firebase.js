import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserNameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  console.log(result);

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
  return user;
}

//algo later to do some crazy stuff? user based haiku recommendations.
export async function getAllUnlikedHaikus(likedHaikuIds) {
  console.log("result is stage 1");
  const result = await firebase
    .firestore()
    .collection("haikus")
    .where("haikuId", "not-in", likedHaikuIds)
    .get();
  const unlikedHaikus = result.docs.map((item) => ({
    ...item.data()
  }));
  return unlikedHaikus;
}

export async function getAllLikedHaikus(likedHaikuIds) {
  const result = await firebase
    .firestore()
    .collection("haikus")
    .where("haikuId", "in", likedHaikuIds)
    .get();
  const likedHaikus = result.docs.map((item) => ({
    ...item.data()
  }));
  return likedHaikus;
}
