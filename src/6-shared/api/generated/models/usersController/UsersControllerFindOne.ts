import type { UserResponseDto } from "../UserResponseDto";

export type UsersControllerFindOnePathParams = {
    /**
     * @type string
    */
    idOrEmail: string;
};

export type UsersControllerFindOneQueryResponse = UserResponseDto;
