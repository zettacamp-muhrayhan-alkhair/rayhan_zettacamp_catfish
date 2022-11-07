export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  gender: 'Male' | 'Female';
  birth: Date;
  civility: string;
}
