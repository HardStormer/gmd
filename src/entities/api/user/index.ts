import {
    ChangeNameData, ChangeNameResponce,
    ChangePasswordData, ChangePasswordResponce, DeleteMyAccountData, DeleteMyAccountResponce,
    GetUserByIdParams,
    GetUserByIdResponce,
    LogInData,
    LogInResponce,
    RegisterData, RegisterResponce,
    User
} from "../../model";
import {httpClient, method} from "../../../shared";

export async function getUserById(params: GetUserByIdParams) : Promise<User>{
    let responce = httpClient<GetUserByIdResponce>(
        method.get,
        "/User/Get",
        params)

    return responce;
}

export async function logIn(data: LogInData) : Promise<LogInResponce>{
    let responce = httpClient<LogInResponce>(
        method.post,
        "/User/LogIn",
        {},
        data)

    return responce;
}

export async function register(data: RegisterData) : Promise<RegisterResponce>{
    let responce = httpClient<RegisterResponce>(
        method.post,
        "/User/Register",
        {},
        data)

    return responce;
}

export async function logOut() {
    let responce = httpClient(
        method.post,
        "/User/LogOut")

    return responce;
}

export async function changePassword(data: ChangePasswordData) : Promise<ChangePasswordResponce>{
    let responce = httpClient<ChangePasswordResponce>(
        method.post,
        "/User/ChangePassword",
        {},
        data)

    return responce;
}

export async function changeName(data: ChangeNameData) : Promise<ChangeNameResponce>{
    let responce = httpClient<ChangeNameResponce>(
        method.post,
        "/User/ChangeName",
        {},
        data)

    return responce;
}

export async function deleteMyAccount(data: DeleteMyAccountData) : Promise<DeleteMyAccountResponce>{
    let responce = httpClient<DeleteMyAccountResponce>(
        method.post,
        "/User/DeleteMyAccount",
        {},
        data)

    return responce;
}