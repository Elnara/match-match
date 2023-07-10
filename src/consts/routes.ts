interface IPath {
  path: string;
}

interface IPathWithPermission extends IPath {
  permissions: string[];
}

export enum RoutesKeys {
  ROOT = "ROOT",
  RATING = "RATING",
}

export const routes: Record<RoutesKeys, IPathWithPermission> = {
  [RoutesKeys.ROOT]: {
    path: "/",
    permissions: [],
  },
  [RoutesKeys.RATING]: {
    path: "/rating",
    permissions: [],
  },
};
