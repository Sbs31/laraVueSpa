let mutations = {
        ADD_TK(state, TK) {
            state.TKs.unshift(TK)
        },
        GET_TKS(state, TKs) {
            state.TKs = TKs
        },
        CACHE_REMOVED(state, todo) {
            state.toRemove = TKs;
        },
        DELETE_TK(state, TK) {
            state.TKs.splice(state.TKs.indexOf(TK), 1)
        }
    }
    export default mutations