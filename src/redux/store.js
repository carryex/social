import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideNavReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "Hi! How are you?",
          likesCount: 98,
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        },
        {
          id: 2,
          message: "You! What`s up?",
          likesCount: 223,
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Vomit&skinColor=DarkBrown",
        },
        {
          id: 3,
          message: "It`s amazing",
          likesCount: 420,
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Wayfarers&hatColor=Blue01&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=Overall&clotheColor=Heather&graphicType=Bear&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Yellow",
        },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "HI!" },
        { id: 2, message: "What`s up?" },
        { id: 3, message: "How are you?" },
      ],
      dialogsData: [
        {
          id: 1,
          name: "Daniil",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        },
        {
          id: 2,
          name: "Alexdandr",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Vomit&skinColor=DarkBrown",
        },
        {
          id: 3,
          name: "Michail",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Wayfarers&hatColor=Blue01&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=Overall&clotheColor=Heather&graphicType=Bear&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Yellow",
        },
        {
          id: 4,
          name: "Vova",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=Turban&accessoriesType=Sunglasses&hatColor=Gray01&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Close&eyebrowType=FlatNatural&mouthType=Default&skinColor=Black",
        },
        {
          id: 5,
          name: "Nadya",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=Pink&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black",
        },
      ],
      newMessageText: "введи сообщение",
    },
    sideNav: {
      friends: [
        {
          id: 1,
          name: "Alica",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        },
        {
          id: 2,
          name: "Maxim",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Vomit&skinColor=DarkBrown",
        },
        {
          id: 3,
          name: "Borko",
          avatar:
            "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Wayfarers&hatColor=Blue01&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=Overall&clotheColor=Heather&graphicType=Bear&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Yellow",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sideNav = sideBarReducer(this._state.sideNav, action);

    this._callSubscriber(this._state);
  },
};
export default store;
