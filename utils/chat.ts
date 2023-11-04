export const getConversationId = (user: { _id: any; }, users: { _id: any; }[]) => {
  return users[0]._id === user._id ? users[1]._id : users[0]._id;
};
