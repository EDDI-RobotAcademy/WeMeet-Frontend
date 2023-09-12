import BoardReadPage from "@/views/board/BoardReadPage.vue";
import BoardModifyPage from "@/views/board/BoardModifyPage.vue";
import QnaBoardListPage from "@/views/board/QnaBoardListPage.vue";
import BoardWritePage from "@/views/board/BoardWritePage.vue";
import MoimBoardWritePage from "@/views/board/MoimBoardWritePage.vue";

const boardRouter = [
  {
    path: '/board/:boardId',
    name: 'BoardReadPage',
    component: BoardReadPage,
    props: true
  },
  {
    path: '/board/modify/:boardId',
    name: 'BoardModifyPage',
    component: BoardModifyPage,
    props: true
  },
  {
    path: `/board/:category/list`,
    name: 'QnaBoardListPage',
    component: QnaBoardListPage,
  },
  {
    path: '/board/moim/:moimId/write',
    name: 'MoimBoardWritePage',
    component: MoimBoardWritePage,
    props: true
  },
  {
    path: '/board/:category/write',
    name: 'BoardWritePage',
    component: BoardWritePage,
    props: true
  },
]
export default boardRouter