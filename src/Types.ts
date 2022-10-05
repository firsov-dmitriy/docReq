export interface IDocReq {
  id: number;
  name: string;
  constructorsId: Array<number>;
}
export interface IConstructor {
  id: number;
  fullName: string;
}
export interface IDocReqSort {
  _sort?: string;
  _order?: string;
}
