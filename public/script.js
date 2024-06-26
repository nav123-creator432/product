
const addButton = document.querySelector('.add button');
        addButton.addEventListener('click', () => {
            document.querySelector('.form').innerHTML = `
                <dotlottie-player src="https://lottie.host/38062593-8aa0-446f-979c-4e5e075c2bc8/IU9G4gl9mU.json" background="transparent" speed="1" style="width: 300px; height: 300px;"  autoplay></dotlottie-player>
                <h2>Product has been added</h2>
                <button type="button" class="back">Back</button>
            `;

            document.querySelector('.back').addEventListener('click', () => {
                window.location.href = '/';
            });
        });