export interface Owner {
  avatar_url: string;
}

export interface Repo {
  description?: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  full_name: string;
  owner: Owner;
  created_at: string;
  updated_at: string;
  language?: string;
}
