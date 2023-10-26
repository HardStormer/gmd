import {
    CreateMessageData,
    CreateMessageResponse, DeleteMessageData, DeleteMessageResponse, EditMessageData, EditMessageResponse,
    GetMessageByIdParams, GetMessageByIdResponse, GetMessageListByRoomIdParams, GetMessageListByRoomIdResponse,
    GetMessageListByTextParams, GetMessageListByTextResponse,
    Message, Messages,
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getMessageById(params: GetMessageByIdParams) : Promise<Message>{
    let response = httpClient<GetMessageByIdResponse>(
        method.get,
        "/Message/Get",
        params)

    return response;
}

export async function getMessageListByText(params: GetMessageListByTextParams) : Promise<Messages>{
    let response = httpClient<GetMessageListByTextResponse>(
        method.get,
        "/Message/GetAllPagedByText",
        params)

    return response;
}

export async function getMessageListByRoomId(params: GetMessageListByRoomIdParams) : Promise<Messages>{
    let response = httpClient<GetMessageListByRoomIdResponse>(
        method.get,
        "/Message/GetAllPagedByRoomId",
        params)

    return response;
}

export async function createMessageByName(data: CreateMessageData) : Promise<CreateMessageResponse>{
    let response = httpClient<CreateMessageResponse>(
        method.post,
        "/Message/Create",
        {},
        data)

    return response;
}

export async function editMessageByName(data: EditMessageData) : Promise<EditMessageResponse>{
    let response = httpClient<EditMessageResponse>(
        method.put,
        "/Message/Edit",
        {},
        data)

    return response;
}


export async function deleteMessageById(data: DeleteMessageData) : Promise<DeleteMessageResponse>{
    let response = httpClient<DeleteMessageResponse>(
        method.delete,
        "/Message/Delete",
        {},
        data)

    return response;
}