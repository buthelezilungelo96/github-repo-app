import { useQuery, QueryObserverResult } from "react-query";
import { loadRepoIssues, loadRepos } from "../../services/repoService";

const defaults = { per_page: 50, page: 1, q: "" };

export function useLoadRepos(
  reposFilter?: any
): QueryObserverResult<any, Error> {
  const search = reposFilter ?? defaults;

  return useQuery(["useLoadRepos", search], () => loadRepos(search), {
    enabled: !!reposFilter.q,
  });
}

export function useLoadRepoIssues(
  reposFilter: any,
  state: string
): QueryObserverResult<any, Error> {
  const search = reposFilter;

  return useQuery(
    ["useLoadRepos", search],
    () => loadRepoIssues(search, state),
    {
      enabled: !!reposFilter.q,
    }
  );
}
