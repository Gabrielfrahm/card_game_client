export interface IListResponse<T> {
  data: {
    data: T[];
    meta: {
      current_page: number;
      per_page: number;
      last_page: number;
      total: number;
    };
  };
}

export type FiltersParams = {
  per_page?: string;
  page?: string;
  sort?: string;
  sort_dir?: string;
  filter?: string;
  column?: string;
};
