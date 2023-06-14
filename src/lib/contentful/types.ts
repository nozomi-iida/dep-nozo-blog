type SysLink = {
  type: string;
  linkType: string;
  id: string;
};

type Sys = {
  space: {
    sys: SysLink;
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: SysLink;
  };
  revision: number;
  contentType: {
    sys: SysLink;
  };
  locale: string;
};

export type ListResType<T = any> = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: ItemResType<T>[];
};

export type ItemResType<T = any> = {
  sys: Sys;
  metadata: {
    tags: any[];
  };
  fields: T;
};
