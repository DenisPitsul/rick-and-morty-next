export const PAGES = {
  HOME: "/",
  CHARACTER: (characterId: string) => `/${characterId}`,
  EPISODES: "/episodes",
  EPISODE: (characterId: string) => `/episodes/${characterId}`,
  LOCATIONS: "/location",
  LOCATION: (characterId: string) => `/location/${characterId}`,
};
