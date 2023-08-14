import { io } from "socket.io-client";
import { BACKEND_BASE_URL } from "@src/config/envs";

export const socket = io(BACKEND_BASE_URL, {
  withCredentials: true,
});
