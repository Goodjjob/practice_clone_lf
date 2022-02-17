interface Group<T> {
  id: string;
  name: string;
  children: T[];
};

interface Link {
  id: string;
  url: string;
  component: JSX.Element[];
};

export type { Link, Group };