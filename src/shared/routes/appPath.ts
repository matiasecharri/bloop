const AppPath = {
  HOME: "/",
  ABOUT: "/about",
} as const;

export type RouteKey = keyof typeof AppPath;

export type RouteValueType = (typeof AppPath)[RouteKey];

export default AppPath;
