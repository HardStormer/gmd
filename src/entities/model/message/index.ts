import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type Message = components["schemas"]["MessageViewModel"]
export type Messages = components["schemas"]["MessageListViewModel"]

export type GetMessageByIdParams = paths["/Message/Get"]["get"]["parameters"]["query"]
export type GetMessageByIdResponse = Message

export type GetMessageListByTextParams = paths["/Message/GetAllPagedByText"]["get"]["parameters"]["query"]
export type GetMessageListByTextResponse = Messages

export type CreateMessageData = components["schemas"]["CreateMessageCommand"]
export type CreateMessageResponse = paths["/Message/Create"]["post"]["responses"]["200"]["content"]["application/json"]

export type EditMessageData = components["schemas"]["UpdateMessageCommand"]
export type EditMessageResponse = paths["/Message/Edit"]["put"]["responses"]["200"]["content"]["application/json"]

export type DeleteMessageData = components["schemas"]["DeleteMessageCommand"]
export type DeleteMessageResponse = paths["/Message/Delete"]["delete"]["responses"]["200"]["content"]["application/json"]
