import {
    ChangeNameData, ChangeNameResponse,
    ChangePasswordData, ChangePasswordResponse, DeleteMyAccountResponse,
    GetUserByIdParams,
    GetUserByIdResponse,
    LogInData,
    LogInResponse,
    RegisterData, RegisterResponse,
    User
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getUserById(params: GetUserByIdParams) : Promise<User>{
    let response = httpClient<GetUserByIdResponse>(
        method.get,
        "/User/Get",
        params)

    return response;
}

export async function logIn(data: LogInData) : Promise<LogInResponse>{
    let response = httpClient<LogInResponse>(
        method.post,
        "/User/LogIn",
        {},
        data)

    return response;
}

export async function register(data: RegisterData) : Promise<RegisterResponse>{
    let response = httpClient<RegisterResponse>(
        method.post,
        "/User/Register",
        {},
        data)

    return response;
}

export async function logOut() {
    let response = httpClient(
        method.post,
        "/User/LogOut")

    return response;
}

export async function changePassword(data: ChangePasswordData) : Promise<ChangePasswordResponse>{
    let response = httpClient<ChangePasswordResponse>(
        method.post,
        "/User/ChangePassword",
        {},
        data)

    return response;
}

export async function changeName(data: ChangeNameData) : Promise<ChangeNameResponse>{
    let response = httpClient<ChangeNameResponse>(
        method.post,
        "/User/ChangeName",
        {},
        data)

    return response;
}

export async function deleteMyAccount() : Promise<DeleteMyAccountResponse>{
    let response = httpClient<DeleteMyAccountResponse>(
        method.post,
        "/User/DeleteMyAccount",
        {},
        {})

    return response;
}