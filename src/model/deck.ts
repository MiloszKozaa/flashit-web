export interface IDeck {
  _id: string;
  name: string;
  fromLang: string;
  toLang: string;
  isPublic: boolean;
  owner_id: string;
  cards: [];
  createDate: Date;
  contributors: [];
}
