import profileReducer, { addPost, deletePost } from "./profileReducer";

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
};

it("length of posts should be increamented", () => {
  let text = "this is post text";
  let action = addPost(text);
  let newState = profileReducer(initialState, action);
  expect(newState.postsData.length).toBe(4);
});

it("message of new post should be correct", () => {
  let text = "this is post text";
  let action = addPost(text);
  let newState = profileReducer(initialState, action);
  expect(newState.postsData[3].message).toBe(text);
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(initialState, action);
  expect(newState.postsData.length).toBe(2);
});

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(10);
  let newState = profileReducer(initialState, action);
  expect(newState.postsData.length).toBe(3);
});
