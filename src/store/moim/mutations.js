import {SET_MOIM} from "@/store/moim/mutation-types";

export default {
  [SET_MOIM] (state, receivedData) {
    state.moim = receivedData
  }
}