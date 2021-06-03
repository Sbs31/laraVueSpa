 let getters = {
     newTK: state => {
         return state.newTK
     },
     TKs: state => {
         return state.TKs
     },
     toRemove: state => {
         return state.toRemove
     },
     authenticated: state => state.authenticated
}
 export default getters
