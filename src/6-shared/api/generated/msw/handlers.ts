import { authControllerGoogleAuthCallbackHandler } from "./authController/authControllerGoogleAuthCallbackHandler";
import { authControllerGoogleAuthHandler } from "./authController/authControllerGoogleAuthHandler";
import { authControllerLoginHandler } from "./authController/authControllerLoginHandler";
import { authControllerLogoutHandler } from "./authController/authControllerLogoutHandler";
import { authControllerRefreshTokensHandler } from "./authController/authControllerRefreshTokensHandler";
import { authControllerRegisterHandler } from "./authController/authControllerRegisterHandler";
import { authControllerSuccessGoogleHandler } from "./authController/authControllerSuccessGoogleHandler";
import { cashBooksControllerGetCashBalanceHandler } from "./cashBooksController/cashBooksControllerGetCashBalanceHandler";
import { cashBooksControllerGetCurrentCashBooksHandler } from "./cashBooksController/cashBooksControllerGetCurrentCashBooksHandler";
import { usersControllerFindOneHandler } from "./usersController/usersControllerFindOneHandler";
import { usersControllerMeHandler } from "./usersController/usersControllerMeHandler";
import { usersControllerRemoveHandler } from "./usersController/usersControllerRemoveHandler";
import { usersControllerUpdateUserHandler } from "./usersController/usersControllerUpdateUserHandler";

export const handlers = [usersControllerFindOneHandler,usersControllerRemoveHandler,usersControllerMeHandler,usersControllerUpdateUserHandler,cashBooksControllerGetCashBalanceHandler,cashBooksControllerGetCurrentCashBooksHandler,authControllerRegisterHandler,authControllerLoginHandler,authControllerLogoutHandler,authControllerRefreshTokensHandler,authControllerGoogleAuthHandler,authControllerGoogleAuthCallbackHandler,authControllerSuccessGoogleHandler] as const;