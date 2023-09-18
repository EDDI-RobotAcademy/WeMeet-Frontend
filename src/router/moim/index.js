import MoimInfoPage from "@/views/moim/MoimInfoPage.vue";
import MoimFormPage from "@/views/moim/MoimFormPage.vue";
import MoimJoinPage from "@/views/moim/MoimJoinPage.vue";
import MoimAdvancedSerchPage from "@/views/moim/MoimAdvancedSerchPage.vue";

const moimRouter = [
  {
    path: "/moim/:moimId",
    name: "MoimInfoPage",
    component: MoimInfoPage,
    props: true
  },
  {
    path: "/moim/form",
    name: "MoimFormPage",
    component: MoimFormPage
  },
  {
    path: "/moim/:moimId/join",
    name: "MoimJoinPage",
    component: MoimJoinPage,
    props: true,
  },
  {
    path: "/moim/advanced-search",
    name: "AdvancedSearch",
    component: MoimAdvancedSerchPage
  }
]
export default moimRouter