// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'UYskv4HuDjbcPhFzFuToydFXXt12',
      username: 'karl',
      fullName: 'Karl Hadwen',
      emailAddress: 'karlhadwen@gmail.com',
      likedHaikus: [3,4],
      dateCreated: Date.now()

    },
    {
      userId: '2',
      username: 'raphael',
      fullName: 'Raffaello Sanzio da Urbino',
      emailAddress: 'raphael@sanzio.com',
      likedHaikus: [1, 2],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      likedHaikus: [1,4],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      likedHaikus: [3, 5],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('haikus')
      .add({
        haikuId: i,
        userId: '2',
        haikuText: `Test Haiku the number is ${i}`,
        haikuTitle: 'Test Haiku!',
        likes: 2 + i,
        dateCreated: Date.now()
      });
  }
}