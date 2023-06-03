export type UserDTO = {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  notification: boolean;
  active: boolean;
  created_at?: Date;
  updated_at?: Date;
};
