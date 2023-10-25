import {components, paths} from "../../../../generated/privateMessanger-api-types-v1";
export type Room = components["schemas"]["RoomViewModel"]
export type Rooms = components["schemas"]["RoomListViewModel"]

export type GetRoomByIdParams = paths["/Room/Get"]["get"]["parameters"]["query"]
export type GetRoomByIdResponse = Room

export type GetRoomListByNameParams = paths["/Room/GetAllPagedByName"]["get"]["parameters"]["query"]
export type GetRoomListByNameResponse = Rooms

export type GetRoomListByUserIdParams = paths["/Room/GetAllPagedByUserId"]["get"]["parameters"]["query"]
export type GetRoomListByUserIdResponse = Rooms

export type GetRoomListMyParams = paths["/Room/GetAllPagedMy"]["get"]["parameters"]["query"]
export type GetRoomListMyResponse = Rooms

export type CreateRoomData = components["schemas"]["CreateRoomCommand"]
export type CreateRoomResponse = paths["/Room/Create"]["post"]["responses"]["200"]["content"]["application/json"]

export type EditRoomData = components["schemas"]["UpdateRoomCommand"]
export type EditRoomResponse = paths["/Room/Edit"]["put"]["responses"]["200"]["content"]["application/json"]

export type DeleteRoomData = components["schemas"]["DeleteRoomCommand"]
export type DeleteRoomResponse = paths["/Room/Delete"]["delete"]["responses"]["200"]["content"]["application/json"]
