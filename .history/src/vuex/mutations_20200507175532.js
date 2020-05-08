export default {
  add_to_cart(state,payload){
    payload.checked = true
    state.roles.push(payload)
  }
}
