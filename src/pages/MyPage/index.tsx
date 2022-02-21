interface MenuGroup<T> {
  id: string;
  name: string;
  children: T[];
};

interface Menu {
  id: string;
  url: string;
  component: JSX.Element[];
};

export type { Menu, MenuGroup };