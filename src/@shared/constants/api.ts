export const urls = {
  auth: {
    login: (): string => "/authenticate",
  },
  user: {
    create: (): string => "/users",
  },
  card: {
    list: (): string => "/cards",
    get: (id: string): string => `/cards/${id}`,
  },
};
