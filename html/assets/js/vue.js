const Dudes = {
    data() {
        return {
            dude: {},
            customerReviews: [ {
                name: 'Tomas Bordac',
                message: 'Bol som s tvorbou sofwtare nadmieru spokojny. Dodanie bolo velmi rychle.',
                rating: 10
            } ]
        }
    },
    methods: {
        addReview() {
            if (parseInt(this.dude.rating)) {
                console.log(this.dude.name, "<>", this.dude.message, "<>", this.dude.rating);
                this.customerReviews.push({"name": this.dude.name, "message": this.dude.message, "rating": this.dude.rating});
            } else {
                console.log(`Rating ${this.dude.rating} is not an integer` )
            }
        }
    }
}

Vue.createApp(Dudes).mount('#main');