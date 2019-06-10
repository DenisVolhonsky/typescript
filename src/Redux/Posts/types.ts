export const actionTypes = {
  FETCH_DATA:'FETCH_DATA',
  FIND_DATA: 'FIND_DATA',
};

export interface IPosts {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}