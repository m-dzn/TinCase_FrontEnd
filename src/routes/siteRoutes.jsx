import config from "config.json";
import {
  HomePage,
  PostListPage,
  JoinPage,
  LoginPage,
  UserPage,
  PostWritePage,
  PostEditPage,
  PostDetailPage,
  GalleryListPage,
} from "pages";
import {
  BsNewspaper,
  BsPencilSquare,
  BsGrid1X2Fill,
  BsImageFill,
} from "react-icons/bs";
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
    path: route.postListPage,
    exact: true,
    page: PostListPage,
    dashboard: true,
  },
  {
    label: "Gallery",
    icon: BsImageFill,
    path: route.galleryListPage,
    exact: true,
    page: GalleryListPage,
    dashboard: true,
  },
];

export const pages = [
  {
    path: route.postWritePage,
    exact: false,
    page: PostWritePage,
    isPrivate: true,
  },
  {
    path: route.postEditPage,
    exact: false,
    page: PostEditPage,
    isPrivate: true,
  },
  {
    path: route.postDetailPage,
    exact: false,
    page: PostDetailPage,
  },
  {
    path: route.userPage,
    exact: false,
    page: UserPage,
    isPrivate: true,
  },
];
