export type NavItemType = {
  text: string;
  to: string;
};

export type NavItemsType = Array<NavItemType>;

const navMain: NavItemsType = [
  {
    text: 'Home',
    to: '#home',
  },
  {
    text: 'About',
    to: '#about',
  },
  {
    text: 'Contact',
    to: '#contact',
  },
  {
    text: 'Projects',
    to: '#projects',
  },
  {
    text: 'Blog',
    to: '#blog',
  },
];

export default navMain;
