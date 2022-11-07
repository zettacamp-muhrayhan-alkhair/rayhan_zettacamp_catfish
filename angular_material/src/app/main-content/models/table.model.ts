import { Company } from './company.model';

export interface Table {
  _id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: Company;
  user_status: string;
  count_document: number;
}
