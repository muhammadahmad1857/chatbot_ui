import Message from "./messageType";

export default interface ChatType {
  chat: Message[];
  id: string;
  name: string;
  timeStamp: string;
}
