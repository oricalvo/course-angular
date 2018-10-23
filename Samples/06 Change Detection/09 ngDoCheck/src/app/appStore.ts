export interface Contact {
  id: number;
  name: string;
}

export interface Versioned {
  $version: number;
}

export const appStore = {
  contacts: initVersion([
    {"id": 1, "name": "Ori"},
    {"id": 2, "name": "Roni"},
  ])
};

export function initVersion<T>(t: T): T & Versioned {
  t["$version"] = 1;

  return <any>t;
}

export function incVersion<T>(oldData: T & Versioned, newData: T): T & Versioned {
  newData["$version"] = oldData.$version + 1;

  return <any>newData;
}
