export const getConversationId = (
  user: { _id: any },
  users: { _id: any }[]
) => {
  return users[0]._id === user._id ? users[1]._id : users[0]._id;
};

export const getConversationName = (
  user: { _id: any },
  users: {
    _id: any;
    name: any;
  }[]
) => {
  return users[0]._id === user._id ? users[1].name : users[0].name;
};

export const getConversationPicture = (
  user: { _id: any },
  users: {
    [x: string]: any;
    _id: any;
  }[]
) => {
  return users[0]._id === user._id ? users[1].picture : users[0].picture;
};
