import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type Room = components["schemas"]["RoomViewModel"]
export type Rooms = components["schemas"]["RoomListViewModel"]

export type GetRoomByIdParams = paths["/Room/Get"]["get"]["parameters"]["query"]
export type GetRoomByIdResponce = paths["/Room/Get"]["get"]["responses"]["200"]["content"]["application/json"]

export type GetRoomListByNameParams = paths["/Room/GetAllPagedByName"]["get"]["parameters"]["query"]
export type GetRoomListByNameResponce = paths["/Room/GetAllPagedByName"]["get"]["responses"]["200"]["content"]["application/json"]

export type CreateRoomData = paths["/Room/Create"]["post"]["requestBody"]
export type CreateRoomResponce = paths["/Room/Create"]["post"]["responses"]["200"]["content"]["application/json"]

export type EditRoomData = paths["/Room/Edit"]["put"]["requestBody"]
export type EditRoomResponce = paths["/Room/Edit"]["put"]["responses"]["200"]["content"]["application/json"]

export type DeleteRoomData = paths["/Room/Delete"]["delete"]["requestBody"]
export type DeleteRoomResponce = paths["/Room/Delete"]["delete"]["responses"]["200"]["content"]["application/json"]
