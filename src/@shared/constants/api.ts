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
  deck: {
    list: (user_id: string): string => `/decks/${user_id}`,
    get: (id: string): string => `/decks/one/${id}`,
    create: (): string => "/decks",
  },
};
