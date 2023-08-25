import MoimInfoPage from "@/views/moim/MoimInfoPage.vue";

const moimRouter = [
  {
    path: "/moim/:moimId",
    name: "MoimInfoPage",
    component: MoimInfoPage,
    props: true
  }
]
export default moimRouter