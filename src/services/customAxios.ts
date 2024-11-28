import axios from "axios";

const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

const TIMEOUT = 29000;
const DEFAULT_HEADERS = {
  // "Content-Type": "application/vnd.github+json",
  // Authorization: `Bearer ${APP_TOKEN}`,
  Authorization: ``,
};

const customAxios = axios.create({
  timeout: TIMEOUT,
  headers: DEFAULT_HEADERS,
});
const defaultAxios = axios.create({
  timeout: TIMEOUT,
  headers: DEFAULT_HEADERS,
});

export { customAxios, defaultAxios };
