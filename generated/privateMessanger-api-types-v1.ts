/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
import {GetMessageListByRoomIdParams} from "../src/entities";


export interface paths {
  "/Message/GetAllPagedByText": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          Text?: string;
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["MessageListViewModel"];
            "application/json": components["schemas"]["MessageListViewModel"];
            "text/json": components["schemas"]["MessageListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/GetAllPagedByRoomId": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          RoomId?: string;
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["MessageListViewModel"];
            "application/json": components["schemas"]["MessageListViewModel"];
            "text/json": components["schemas"]["MessageListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/GetAllPaged": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["MessageListViewModel"];
            "application/json": components["schemas"]["MessageListViewModel"];
            "text/json": components["schemas"]["MessageListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/Get": {
    /** метод предназначен для получения отдельного элемента данных */
    get: {
      parameters: {
        query?: {
          Id?: string;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["MessageViewModel"];
            "application/json": components["schemas"]["MessageViewModel"];
            "text/json": components["schemas"]["MessageViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/Create": {
    /** метод предназначен для создания нового элемента данных */
    post: {
      /** @description экземпляр */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["CreateMessageCommand"];
          "text/json": components["schemas"]["CreateMessageCommand"];
          "application/*+json": components["schemas"]["CreateMessageCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["MessageViewModel"];
            "application/json": components["schemas"]["MessageViewModel"];
            "text/json": components["schemas"]["MessageViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/Edit": {
    /** метод предназначен для редактирования элемента данных */
    put: {
      /** @description экземпляр */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["UpdateMessageCommand"];
          "text/json": components["schemas"]["UpdateMessageCommand"];
          "application/*+json": components["schemas"]["UpdateMessageCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Message/Delete": {
    /** метод предназначен удаления отдельного элемента данных */
    delete: {
      /** @description идентификатор типа Guid и параметр определяющий тип удаления (по умолчанию true) */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["DeleteMessageCommand"];
          "text/json": components["schemas"]["DeleteMessageCommand"];
          "application/*+json": components["schemas"]["DeleteMessageCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/GetAllPagedByName": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          Name?: string;
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomListViewModel"];
            "application/json": components["schemas"]["RoomListViewModel"];
            "text/json": components["schemas"]["RoomListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/GetAllPagedMy": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomListViewModel"];
            "application/json": components["schemas"]["RoomListViewModel"];
            "text/json": components["schemas"]["RoomListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/GetAllPagedByUserId": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          UserId?: string;
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomListViewModel"];
            "application/json": components["schemas"]["RoomListViewModel"];
            "text/json": components["schemas"]["RoomListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/GetAllPaged": {
    /** метод предназначен для получения пагинированного списка элементов */
    get: {
      parameters: {
        query?: {
          Limit?: number;
          Offset?: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomListViewModel"];
            "application/json": components["schemas"]["RoomListViewModel"];
            "text/json": components["schemas"]["RoomListViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/Get": {
    /** метод предназначен для получения отдельного элемента данных */
    get: {
      parameters: {
        query?: {
          Id?: string;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomViewModel"];
            "application/json": components["schemas"]["RoomViewModel"];
            "text/json": components["schemas"]["RoomViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/Create": {
    /** метод предназначен для создания нового элемента данных */
    post: {
      /** @description экземпляр */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["CreateRoomCommand"];
          "text/json": components["schemas"]["CreateRoomCommand"];
          "application/*+json": components["schemas"]["CreateRoomCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RoomViewModel"];
            "application/json": components["schemas"]["RoomViewModel"];
            "text/json": components["schemas"]["RoomViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/Edit": {
    /** метод предназначен для редактирования элемента данных */
    put: {
      /** @description экземпляр */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["UpdateRoomCommand"];
          "text/json": components["schemas"]["UpdateRoomCommand"];
          "application/*+json": components["schemas"]["UpdateRoomCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/Room/Delete": {
    /** метод предназначен удаления отдельного элемента данных */
    delete: {
      /** @description идентификатор типа Guid и параметр определяющий тип удаления (по умолчанию true) */
      requestBody?: {
        content: {
          "application/json": components["schemas"]["DeleteRoomCommand"];
          "text/json": components["schemas"]["DeleteRoomCommand"];
          "application/*+json": components["schemas"]["DeleteRoomCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/Get": {
    /** метод предназначен для получения отдельного элемента данных */
    get: {
      parameters: {
        query?: {
          Id?: string;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["UserViewModel"];
            "application/json": components["schemas"]["UserViewModel"];
            "text/json": components["schemas"]["UserViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/GetMy": {
    /** метод предназначен для получения отдельного элемента данных */
    get: {
      parameters: {
        query?: {
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["UserViewModel"];
            "application/json": components["schemas"]["UserViewModel"];
            "text/json": components["schemas"]["UserViewModel"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/LogIn": {
    /** Авторизация */
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["LoginUserCommand"];
          "text/json": components["schemas"]["LoginUserCommand"];
          "application/*+json": components["schemas"]["LoginUserCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["LoginUserCommandResponce"];
            "application/json": components["schemas"]["LoginUserCommandResponce"];
            "text/json": components["schemas"]["LoginUserCommandResponce"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/Register": {
    /** Регистрация */
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["RegisterUserCommand"];
          "text/json": components["schemas"]["RegisterUserCommand"];
          "application/*+json": components["schemas"]["RegisterUserCommand"];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            "text/plain": components["schemas"]["RegisterUserCommandResponce"];
            "application/json": components["schemas"]["RegisterUserCommandResponce"];
            "text/json": components["schemas"]["RegisterUserCommandResponce"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/LogOut": {
    /** Выход */
    post: {
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/ChangePassword": {
    /** Редактирование пароля */
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["UpdateUserPasswordCommandRequest"];
          "text/json": components["schemas"]["UpdateUserPasswordCommandRequest"];
          "application/*+json": components["schemas"]["UpdateUserPasswordCommandRequest"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/ChangeName": {
    /** Редактирование имени */
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["UpdateUserNameCommandRequest"];
          "text/json": components["schemas"]["UpdateUserNameCommandRequest"];
          "application/*+json": components["schemas"]["UpdateUserNameCommandRequest"];
        };
      };
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
  "/User/DeleteMyAccount": {
    /** Удалить мой аккаунт */
    post: {
      responses: {
        /** @description Success */
        200: never;
        /** @description Bad Request */
        400: {
          content: {
            "text/plain": components["schemas"]["ValidationProblemDetails"];
            "application/json": components["schemas"]["ValidationProblemDetails"];
            "text/json": components["schemas"]["ValidationProblemDetails"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: {
            "text/plain": components["schemas"]["ProblemDetails"];
            "application/json": components["schemas"]["ProblemDetails"];
            "text/json": components["schemas"]["ProblemDetails"];
          };
        };
        /** @description Server Error */
        500: never;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    CreateMessageCommand: {
      /** Format: uuid */
      roomId?: string;
      text?: string | null;
    };
    CreateRoomCommand: {
      name?: string | null;
    };
    DeleteMessageCommand: {
      soft?: boolean;
      /** Format: uuid */
      messageId?: string;
    };
    DeleteRoomCommand: {
      soft?: boolean;
      /** Format: uuid */
      roomId?: string;
    };
    LoginUserCommand: {
      login?: string | null;
      password?: string | null;
    };
    LoginUserCommandResponce: {
      token?: string | null;
    };
    MessageListViewModel: {
      modelList?: components["schemas"]["MessageViewModel"][] | null;
      /** Format: int32 */
      totalCount?: number;
    };
    MessageViewModel: {
      /** Format: uuid */
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      user?: components["schemas"]["UserViewModel"];
      text?: string | null;
      isRead?: boolean;
      isEdited?: boolean;
      isMy?: boolean;
    };
    ProblemDetails: {
      type?: string | null;
      title?: string | null;
      /** Format: int32 */
      status?: number | null;
      detail?: string | null;
      instance?: string | null;
      [key: string]: unknown;
    };
    RegisterUserCommand: {
      name?: string | null;
      login?: string | null;
      password?: string | null;
    };
    RegisterUserCommandResponce: {
      token?: string | null;
    };
    RoomListViewModel: {
      modelList?: components["schemas"]["RoomViewModel"][] | null;
      /** Format: int32 */
      totalCount?: number;
    };
    RoomViewModel: {
      /** Format: uuid */
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      users?: components["schemas"]["UserViewModel"][] | null;
      name?: string | null;
    };
    UpdateMessageCommand: {
      /** Format: uuid */
      messageId?: string;
      text?: string | null;
    };
    UpdateRoomCommand: {
      /** Format: uuid */
      roomId?: string;
      name?: string | null;
    };
    UpdateUserNameCommandRequest: {
      name?: string | null;
    };
    UpdateUserPasswordCommandRequest: {
      oldPassword?: string | null;
      password?: string | null;
    };
    UserViewModel: {
      /** Format: uuid */
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      name?: string | null;
      login?: string | null;
      bio?: string | null;
    };
    ValidationProblemDetails: {
      type?: string | null;
      title?: string | null;
      /** Format: int32 */
      status?: number | null;
      detail?: string | null;
      instance?: string | null;
      errors?: ({
        [key: string]: string[] | undefined;
      }) | null;
      [key: string]: unknown;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
