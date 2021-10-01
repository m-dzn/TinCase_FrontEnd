import config from "config.json";
import { HomePage, PostPage, JoinPage, LoginPage } from "pages";
import { BsNewspaper, BsPencilSquare } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

export const sidebarMenus = [
  {
    label: "Home",
    icon: HiHome,
    path: "/",
    exact: true,
    page: HomePage,
    dashboard: true,
  },
  {
    label: "Posts",
    icon: BsPencilSquare,
    path: config.postPageUrl,
    exact: false,
    page: PostPage,
    dashboard: true,
  },
];

export const navbarMenus = [
  {
    label: "회원가입",
    icon: null,
    path: "/join",
    page: JoinPage,
  },
  {
    label: "로그인",
    icon: null,
    path: "/login",
    page: LoginPage,
  },
];
