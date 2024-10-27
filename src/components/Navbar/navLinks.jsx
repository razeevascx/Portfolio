import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

export const navLinks = [
  {
    label: 'Home',
    href: '#home',
    icon: AiOutlineHome,
  },
  {
    label: 'About',
    href: '#about',
    icon: AiOutlineUser,
  },
  {
    label: 'Services',
    href: '#services',
    icon: RiServiceLine,
  },

  {
    label: 'Education',
    href: '#education',
    icon: BiBook,
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: BiMessageSquareDetail,
  },
];