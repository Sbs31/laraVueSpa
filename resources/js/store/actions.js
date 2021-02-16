 let actions = {
      ADD_TK({commit}, TK) {
            axios.post('/api/TKs', TK).then(res => {
                if (res.data === "added")
                    console.log('ok')
            }).catch(err => {
                console.log(err)
            })
        },
        DELETE_TK({commit}, TK) {
            axios.delete(`/api/TKs/${TK.id}`)
                .then(res => {
                    if (res.data === 'deleted')
                        console.log('deleted')
                }).catch(err => {
                    console.log(err)
                })
        },
        GET_TKS({commit}) {
            axios.get('/api/TKs')
                .then(res => {
                    {  console.log(res.data)
                        commit('GET_TKS', res.data)
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }
    export default actions