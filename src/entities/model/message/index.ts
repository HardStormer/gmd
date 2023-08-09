import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type Message = components["schemas"]["MessageViewModel"]
export type Messages = components["schemas"]["MessageListViewModel"]

export type GetMessageByIdParams = paths["/Message/Get"]["get"]["parameters"]["query"]
export type GetMessageByIdResponce = paths["/Message/Get"]["get"]["responses"]["200"]["content"]["application/json"]

export type GetMessageListByTextParams = paths["/Message/GetAllPagedByText"]["get"]["parameters"]["query"]
export type GetMessageListByTextResponce = paths["/Message/GetAllPagedByText"]["get"]["responses"]["200"]["content"]["application/json"]

export type CreateMessageData = paths["/Message/Create"]["post"]["requestBody"]
export type CreateMessageResponce = paths["/Message/Create"]["post"]["responses"]["200"]["content"]["application/json"]

export type EditMessageData = paths["/Message/Edit"]["put"]["requestBody"]
export type EditMessageResponce = paths["/Message/Edit"]["put"]["responses"]["200"]["content"]["application/json"]

export type DeleteMessageData = paths["/Message/Delete"]["delete"]["requestBody"]
export type DeleteMessageResponce = paths["/Message/Delete"]["delete"]["responses"]["200"]["content"]["application/json"]
