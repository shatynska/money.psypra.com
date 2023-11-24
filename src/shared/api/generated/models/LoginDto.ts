export type LoginDto = {
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
};
