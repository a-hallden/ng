export class Conversation {
    // These fields are to change to match the proper models
    constructor(
      public id: number,
      public created: Date,
      public conversation_name: string,
      public participants: string[],
    ) {}
  }
  