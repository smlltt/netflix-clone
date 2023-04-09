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

export interface User {
  createdAt: string;
  email: string;
  emailVerified: string | null;
  favoriteIds: string[];
  hashedPassword: string | null;
  id: string;
  image: string;
  name: string;
  updatedAt: string;
}
