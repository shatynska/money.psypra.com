export type RegisterDto = {
  /**
   * @type string
   * @example test@gmail.com
   */
  email: string;
  /**
   * @type string | undefined
   * @example secret_password
   */
  password?: string | null;
  /**
   * @type string
   * @example secret_password
   */
  passportRepeat: string;
};
