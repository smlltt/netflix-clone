export interface StandardQueryParams {
  page: number;
  perPage: number;
}

export interface Movie {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
  id: string;
}
