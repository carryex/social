const SEND_MESSAGE = "SEND_MESSAGE";

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
  pageTitle: "Dialogs",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};
export default dialogReducer;

// Actions Creators
export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
