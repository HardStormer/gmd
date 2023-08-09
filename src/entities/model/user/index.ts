import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type User = components["schemas"]["UserViewModel"]

export type GetUserByIdParams = paths["/User/Get"]["get"]["parameters"]["query"]
export type GetUserByIdResponce = paths["/User/Get"]["get"]["responses"]["200"]["content"]["application/json"]

export type LogInData = paths["/User/LogIn"]["post"]["requestBody"]
export type LogInResponce = paths["/User/LogIn"]["post"]["responses"]["200"]["content"]["application/json"]

export type RegisterData = paths["/User/Register"]["post"]["requestBody"]
export type RegisterResponce = paths["/User/Register"]["post"]["responses"]["200"]["content"]["application/json"]

export type ChangePasswordData = paths["/User/ChangePassword"]["post"]["requestBody"]
export type ChangePasswordResponce = paths["/User/ChangePassword"]["post"]["responses"]["200"]["content"]["application/json"]

export type ChangeNameData = paths["/User/ChangeName"]["post"]["requestBody"]
export type ChangeNameResponce = paths["/User/ChangeName"]["post"]["responses"]["200"]["content"]["application/json"]

export type DeleteMyAccountData = paths["/User/DeleteMyAccount"]["post"]
export type DeleteMyAccountResponce = paths["/User/DeleteMyAccount"]["post"]["responses"]["200"]["content"]["application/json"]


