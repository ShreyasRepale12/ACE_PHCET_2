export const state = () => ({
    name: "",
    email: "",
    user_avatar: "",
    user_class: "",
    user_division: "",
    user_department: "",
    phone: "",
    isSigned: false,
})

export const mutations = {
    updateThroughGoogleSignIn(state, payload) {
        state.name = payload.name;
        state.email = payload.email;
        state.user_avatar = payload.user_avatar;
        state.isSigned = payload.isSigned;
    },
    updateThroughPage(state, payload) {
        state.user_class = payload.curr_year;
        state.user_department = payload.department;
        state.user_division = payload.division;
        state.phone = payload.phone;
    }
}