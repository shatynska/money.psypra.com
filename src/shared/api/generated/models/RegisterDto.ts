export type RegisterDto = {
  /**
   * @type string
   * @example test@gmail.com
   */
  email: string;
  /**
   * @type string
   * @example secret_password
   */
  password: string;
  /**
   * @type string
   * @example secret_password
   */
  passportRepeat: string;
};
