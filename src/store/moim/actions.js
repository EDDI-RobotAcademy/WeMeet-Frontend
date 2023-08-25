import axiosInstance from "@/utility/axiosInstance";

export default {
  requestMoimInfo(context, moimId) {
    return axiosInstance.springAxiosInst.get(`/moim/${moimId}`)
      .then((res)=>{
        context.commit("SET_MOIM", res.data.Moim)
        return res
      })
  }
}