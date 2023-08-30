import AdminMainPage from "@/views/admin/AdminMainPage.vue";
import SetOptionPage from "@/views/admin/moim/travel/SetOptionPage.vue";

const adminRouter = [
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminMainPage
  },
  {
    path: "/admin/moim/travel/setOption",
    name: "SetOptionPage",
    component: SetOptionPage
  }
]
export default adminRouter