// form-handler.js
class FormHandler {
    constructor(formId, responseId, endpoint) {
        this.form = document.getElementById(formId);
        this.responseDiv = document.getElementById(responseId);
        this.endpoint = endpoint;
        this.init();
    }

    init() {
        if (!this.form) {
            console.error(`Form with ID "${this.form}" not found`);
            return;
        }

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        this.showLoading();

        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                this.showSuccess(result);
                this.form.reset(); // Clear form
            } else {
                throw new Error(result.message || 'Something went wrong');
            }

        } catch (error) {
            this.showError(error.message);
        }
    }

    showLoading() {
        if (this.responseDiv) {
            this.responseDiv.className = 'response loading';
            this.responseDiv.innerHTML = '<strong>Sending...</strong>';
            this.responseDiv.style.display = 'block';
        }
    }

    showSuccess(result) {
        if (this.responseDiv) {
            this.responseDiv.className = 'response success';
            this.responseDiv.innerHTML = `
                <strong>Success!</strong> ${result.message}<br>
                <small>Received at: ${result.timestamp}</small>
            `;
            this.hideResponseAfterDelay();
        }
    }

    showError(message) {
        if (this.responseDiv) {
            this.responseDiv.className = 'response error';
            this.responseDiv.innerHTML = `<strong>Error:</strong> 
                                          Nebolo možné odoslať požiadavku.
                                          Skúste neskôr alebo kontaktuje info centrum na <i>info@tbordac.com</i>`;
            this.hideResponseAfterDelay();
        }
    }

    hideResponseAfterDelay(delay = 10_000) {
        setTimeout(() => {
            if (this.responseDiv) {
                this.responseDiv.style.display = 'none';
            }
        }, delay);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the AJAX form handler
    new FormHandler('ajax-form', 'response', 'http://localhost:3000/api/data');

    // You can initialize multiple forms if needed
    // new FormHandler('anotherForm', 'anotherResponse', 'http://localhost:3000/api/other');
});