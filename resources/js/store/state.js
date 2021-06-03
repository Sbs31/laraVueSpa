let state = {
        TKs: [],
        newTK: {
            title: '',
            price:'',
            link: '',
            desc:''
        },
    authenticated: window.localStorage.getItem('authenticated') ? window.localStorage.getItem('authenticated') : false,
    }
    export default state
