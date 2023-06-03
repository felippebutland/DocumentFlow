export type LoggerDTO = {
  user: string;
  action: string;
  ip: string;
  oldRecord?: string;
  newRecord: string;
  created_at?: Date;
};
