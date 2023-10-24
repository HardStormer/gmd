import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type User = components["schemas"]["UserViewModel"]

export type GetUserByIdParams = paths["/User/Get"]["get"]["parameters"]["query"]
export type GetUserByIdResponse = User

export type LogInData = components["schemas"]["LoginUserCommand"]
export type LogInResponse = components["schemas"]["LoginUserCommandResponce"]

export type RegisterData = components["schemas"]["RegisterUserCommand"]
export type RegisterResponse = components["schemas"]["RegisterUserCommandResponce"]

export type ChangePasswordData = components["schemas"]["UpdateUserPasswordCommandRequest"]
export type ChangePasswordResponse = paths["/User/ChangePassword"]["post"]["responses"]["200"]["content"]["application/json"]

export type ChangeNameData = components["schemas"]["UpdateUserNameCommandRequest"]
export type ChangeNameResponse = paths["/User/ChangeName"]["post"]["responses"]["200"]["content"]["application/json"]

export type DeleteMyAccountResponse = paths["/User/DeleteMyAccount"]["post"]["responses"]["200"]["content"]["application/json"]


