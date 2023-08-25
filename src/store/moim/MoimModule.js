import mutations from "@/store/moim/mutations"
import actions from "@/store/moim/actions"
import state from "@/store/moim/state"

const MoimModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default MoimModule