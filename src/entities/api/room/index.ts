import {
    CreateRoomData,
    CreateRoomResponce, DeleteRoomData, DeleteRoomResponce, EditRoomData, EditRoomResponce,
    GetRoomByIdParams, GetRoomByIdResponce,
    GetRoomListByNameParams, GetRoomListByNameResponce,
    Room, Rooms,
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getRoomById(params: GetRoomByIdParams) : Promise<Room>{
    let responce = httpClient<GetRoomByIdResponce>(
        method.get,
        "/Room/Get",
        params)

    return responce;
}

export async function getRoomListByName(params: GetRoomListByNameParams) : Promise<Rooms>{
    let responce = httpClient<GetRoomListByNameResponce>(
        method.get,
        "/Room/GetAllPagedByName",
        params)

    return responce;
}

export async function createRoomByName(data: CreateRoomData) : Promise<CreateRoomResponce>{
    let responce = httpClient<CreateRoomResponce>(
        method.post,
        "/Room/Create",
        {},
        data)

    return responce;
}

export async function editRoomByName(data: EditRoomData) : Promise<EditRoomResponce>{
    let responce = httpClient<EditRoomResponce>(
        method.put,
        "/Room/Edit",
        {},
        data)

    return responce;
}


export async function deleteRoomByName(data: DeleteRoomData) : Promise<DeleteRoomResponce>{
    let responce = httpClient<DeleteRoomResponce>(
        method.delete,
        "/Room/Delete",
        {},
        data)

    return responce;
}