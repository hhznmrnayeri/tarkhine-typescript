export type CommentType = {
  id: string;
  text?: string;
  star?: string;
  date?: string;
  userId?: string;
  user: {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: number;
    email: string;
    photo: string;
    birthday: string;
    commentId: string;
    id: string;
  };
};
