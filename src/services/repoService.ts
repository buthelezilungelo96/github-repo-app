import { customAxios } from "./customAxios";
import { filterToQueryString } from "../utils/Format";

const ENDPOINT_GIT_URL =
  import.meta.env.VITE_ENDPOINT_GIT_URL || "https://api.github.com";

export const loadRepos = async (filters: object): Promise<any> => {
  const queryString = filters ? filterToQueryString(filters) : "";
  return await customAxios.get(
    `${ENDPOINT_GIT_URL}/search/repositories${queryString}`
  );
};



export const loadRepoIssues = async (
  filters: object,
  state: string
): Promise<any> => {
  const queryString = filters ? filterToQueryString(filters) : "";
  return await customAxios.get(
    `${ENDPOINT_GIT_URL}/search/issues${queryString}+is:pr${state}`
  );
};
