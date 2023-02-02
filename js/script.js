
const app = Vue.createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.emails.push(response.data.response);
                })
        }

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getRandomEmail();
        }
    }
});

// monto app in pagina
app.mount('#root')