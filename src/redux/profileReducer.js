import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

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
  profile: null,
  pageTitle: "Profile",
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100) + 1,
        message: action.text,
        likesCount: Math.floor(Math.random() * 100) + 1,
        avatar:
          "https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Close&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Yellow",
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};
export default profileReducer;
//Actions Creators
export const addPost = (text) => ({ type: ADD_POST, text });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

//thunks
export const getUserProfile = (userId) => async (dispach) => {
  let response = await profileAPI.getProfile(userId);
  dispach(setUserProfile(response));
};

export const getUserStatus = (userId) => async (dispach) => {
  let response = await profileAPI.getStatus(userId);
  dispach(setUserStatus(response));
};

export const updateUserStatus = (status) => async (dispach) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispach(setUserStatus(status));
  }
};
