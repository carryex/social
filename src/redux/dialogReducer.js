const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
  pageTitle: "Dialogs",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: Math.floor(Math.random() * 100) + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};
export default dialogReducer;

// Actions Creators
export const addMessageActionCreater = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
