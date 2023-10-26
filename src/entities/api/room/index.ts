import {
    CreateRoomData,
    CreateRoomResponse,
    DeleteRoomData,
    DeleteRoomResponse,
    EditRoomData,
    EditRoomResponse,
    GetRoomByIdParams,
    GetRoomByIdResponse,
    GetRoomListByNameParams,
    GetRoomListByNameResponse,
    GetRoomListByUserIdParams,
    GetRoomListByUserIdResponse,
    GetRoomListMyParams, GetRoomListMyResponse,
    Room,
    Rooms,
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getRoomById(params: GetRoomByIdParams) : Promise<Room>{
    let response = httpClient<GetRoomByIdResponse>(
        method.get,
        "/Room/Get",
        params)

    return response;
}

export async function getRoomListByName(params: GetRoomListByNameParams) : Promise<Rooms>{
    let response = httpClient<GetRoomListByNameResponse>(
        method.get,
        "/Room/GetAllPagedByName",
        params)

    return response;
}

export async function getRoomListByUserId(params: GetRoomListByUserIdParams) : Promise<Rooms>{
    let response = httpClient<GetRoomListByUserIdResponse>(
        method.get,
        "/Room/GetAllPagedByUserId",
        params)

    return response;
}

export async function getRoomListMy(params: GetRoomListMyParams) : Promise<Rooms>{
    let response = httpClient<GetRoomListMyResponse>(
        method.get,
        "/Room/GetAllPagedMy",
        params)

    return response;
}

export async function createRoomByName(data: CreateRoomData) : Promise<CreateRoomResponse>{
    let response = httpClient<CreateRoomResponse>(
        method.post,
        "/Room/Create",
        {},
        data)

    return response;
}

export async function editRoomByName(data: EditRoomData) : Promise<EditRoomResponse>{
    let response = httpClient<EditRoomResponse>(
        method.put,
        "/Room/Edit",
        {},
        data)

    return response;
}


export async function deleteRoomById(data: DeleteRoomData) : Promise<DeleteRoomResponse>{
    let response = httpClient<DeleteRoomResponse>(
        method.delete,
        "/Room/Delete",
        {},
        data)

    return response;
}