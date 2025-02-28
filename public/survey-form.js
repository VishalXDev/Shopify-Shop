document.addEventListener('DOMContentLoaded', () => {
    const cartPage = document.querySelector('.cart-page'); // Adjust selector based on your store's Cart page
    if (cartPage) {
      const surveyForm = document.createElement('div');
      surveyForm.innerHTML = `
        <form id="survey-form">
          <h3>We'd love your feedback!</h3>
          <label for="question1">How was your experience?</label>
          <input type="text" id="question1" name="question1" required>
          <button type="submit">Submit</button>
        </form>
      `;
      cartPage.appendChild(surveyForm);
  
      document.getElementById('survey-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const responses = Object.fromEntries(formData.entries());
        await fetch('/api/survey/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(responses),
        });
        alert('Thank you for your feedback!');
      });
    }
  });