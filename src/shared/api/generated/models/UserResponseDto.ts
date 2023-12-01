export const UserResponseDtoRoles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;
export type UserResponseDtoRoles =
  (typeof UserResponseDtoRoles)[keyof typeof UserResponseDtoRoles];
export type UserResponseDto = {
  /**
   * @type string
   * @example c0298617-9f36-489e-ba72-d462777987e9
   */
  id: string;
  /**
   * @type string
   * @example test@gmail.com
   */
  email: string;
  /**
   * @type string
   * @example USER
   */
  roles: UserResponseDtoRoles;
};
