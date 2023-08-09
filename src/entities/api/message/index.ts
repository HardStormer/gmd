import {
    CreateMessageData,
    CreateMessageResponce, DeleteMessageData, DeleteMessageResponce, EditMessageData, EditMessageResponce,
    GetMessageByIdParams, GetMessageByIdResponce,
    GetMessageListByTextParams, GetMessageListByTextResponce,
    Message, Messages,
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getMessageById(params: GetMessageByIdParams) : Promise<Message>{
    let responce = httpClient<GetMessageByIdResponce>(
        method.get,
        "/Message/Get",
        params)

    return responce;
}

export async function getMessageListByText(params: GetMessageListByTextParams) : Promise<Messages>{
    let responce = httpClient<GetMessageListByTextResponce>(
        method.get,
        "/Message/GetAllPagedByText",
        params)

    return responce;
}

export async function createMessageByName(data: CreateMessageData) : Promise<CreateMessageResponce>{
    let responce = httpClient<CreateMessageResponce>(
        method.post,
        "/Message/Create",
        {},
        data)

    return responce;
}

export async function editMessageByName(data: EditMessageData) : Promise<EditMessageResponce>{
    let responce = httpClient<EditMessageResponce>(
        method.put,
        "/Message/Edit",
        {},
        data)

    return responce;
}


export async function deleteMessageByName(data: DeleteMessageData) : Promise<DeleteMessageResponce>{
    let responce = httpClient<DeleteMessageResponce>(
        method.delete,
        "/Message/Delete",
        {},
        data)

    return responce;
}