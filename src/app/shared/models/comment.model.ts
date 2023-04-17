export class Comment {
    constructor(
      public id:any,
      public content:string,
      public commentable_id:number,
      public commentable_type:string
    ) {}
}
  