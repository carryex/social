const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
  profile: null,
  pageTitle: "Profile",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100) + 1,
        message: state.newPostText,
        likesCount: Math.floor(Math.random() * 100) + 1,
        avatar:
          "https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Close&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Yellow",
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export default profileReducer;

// Actions Creators
export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
