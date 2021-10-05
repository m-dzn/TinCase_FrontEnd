import config from "config.json";
import { authActions } from "modules/auth";
import {
  HomePage,
  PostListPage,
  JoinPage,
  LoginPage,
  PostWritePage,
  PostEditPage,
  PostDetailPage,
} from "pages";
import { BsNewspaper, BsPencilSquare } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

const { route } = config;

export const navbarRoutes = [
  {
    label: "로그인",
    icon: null,
    path: route.loginPage,
    exact: true,
    page: LoginPage,
    isLoggedIn: false,
  },
  {
    label: "회원가입",
    icon: null,
    path: route.joinPage,
    exact: true,
    page: JoinPage,
    isLoggedIn: false,
  },
];

export const sidebarRoutes = [
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
    path: route.postPage,
    exact: true,
    page: PostListPage,
    dashboard: true,
  },
];

export const pages = [
  {
    path: route.postWritePage,
    exact: false,
    page: PostWritePage,
  },
  {
    path: route.postEditPage,
    exact: false,
    page: PostEditPage,
  },
  {
    path: route.postDetailPage,
    exact: false,
    page: PostDetailPage,
  },
];
