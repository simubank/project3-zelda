export interface Quest {
  key?: string;
  uid:string;
  type:string;
  title: string;
  content: string;
  accept: boolean;
  penalty: number;
  gold: number;
  experience: number;
}
