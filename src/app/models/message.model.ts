import { Conversation } from '../conversation-list/conversation.model'

export class Message {
    // Change these fields to match the models in the db
    constructor (
        public id: number,
        public message_text: string,
        public timestamp: Date,
        public sent_by: string,
    ) {}
}