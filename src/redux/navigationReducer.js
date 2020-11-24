const TOOGLE_IS_OPEN = "TOOGLE_IS_OPEN";
const SET_CURRENT_PAGE_TITLE = "SET_CURRENT_PAGE_TITLE";

let initialState = {
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
  isOpen: false,
  currentPage: "",
  currentPageTitle: null,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case SET_CURRENT_PAGE_TITLE:
      return {
        ...state,
        currentPageTitle: action.currentPageTitle,
      };
    default:
      return state;
  }
};
export default navigationReducer;

export const toogleIsOpen = (isOpen) => ({
  type: TOOGLE_IS_OPEN,
  isOpen,
});

export const setCurrentPageTitle = (currentPageTitle) => ({
  type: SET_CURRENT_PAGE_TITLE,
  currentPageTitle,
});
