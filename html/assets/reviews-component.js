class ReviewsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="reviews">
                <p>Pridaj hodnotenie</p>
                <form @submit.prevent="addReview">
                    <input type="text" v-model="dude.name" ref="new" autofocus>
                    <input type="text" v-model="dude.message" ref="new" autofocus>
                    <input type="text" v-model="dude.rating" ref="new" autofocus>
                    <button type="submit">Subscribe</button>
                </form>
                <h2>Hodnotenia zakaznikov</h2>
                <div class="slider-container">
                    <article v-for="customer in customerReviews">
                        <h3>{{ customer.name }}</h3>
                        <p>{{customer.message}}</p>
                        <span v-for="i in parseInt(customer.rating)"> * </span>
                    </article>
                </div>
            </section>
        `;
    }
}

customElements.define('reviews-component', ReviewsComponent);