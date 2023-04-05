const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  profiles: "/profiles",
  movie: (id: string) => `/watch/${id}`,
};

export default routes;
