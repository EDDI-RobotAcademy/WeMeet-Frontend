import mutations from "@/store/user/mutations"
import actions from "@/store/user/actions"
import state from "@/store/user/state"

const UserModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default UserModule