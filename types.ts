
export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}
