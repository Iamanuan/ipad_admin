import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types";

export default {
  add_to_cart(state,payload){
    payload.checked = true
    state.roles.push(payload)
  }
}
