<template>
  <div class="parallax-hero"></div>
  <div>

    <section>
      <div class="centered-container">
        <h1>Contact Information</h1>
        <h2>Location:</h2>
        <p>16331 Heritage Place, Suite 101 Eagle River, AK 99577</p>
        <h2>Phone:</h2>
        <p>(907) 350-8893</p>
        <h2>Email: </h2>
        <p>kellybcba@gmail.com</p>
        <section class="quote-section centered-container">
          <blockquote class="custom-quote">
            Applied Behavior Analysis for children of all ages
          </blockquote>
        </section>
        <p style="padding-top: 20px;">Please use the form on this page to send a message. You may also call, or email anytime using the information below.</p>
        <h2>Contact Us Today!</h2>
      </div>
    </section>

    <section>
      <div class="centered-container form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="Enter your phone number" />
          </div>
          <div class="form-group">
            <label for="message">Message/Comment:</label>
            <textarea id="message" v-model="form.message" placeholder="Type your message here"></textarea>
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>
        <div v-if="showThankYouMessage" class="thank-you-message">
          <p>Thank you for your message!</p>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h1>Need Help Finding the Office?</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.5079236083438!2d-149.57984192290348!3d61.32449897564138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8eb6da02f61b9%3A0x3d19b9d6ae7d8b70!2s16331%20Heritage%20Pl%20%23101%2C%20Eagle%20River%2C%20AK%2099577!5e0!3m2!1sen!2sus!4v1692511774243!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </div>  
</template>

<script>
export default {
name: 'ContactComponent',
data() {
  return {
    form: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    showThankYouMessage: false,
  };
},
methods: {
  submitForm() {
    // Send the form data to the backend
    // You can use Axios or Fetch API to send a POST request
    // Example with Axios:
    // axios.post('/api/contact', this.form).then(response => {
    //   this.showThankYouMessage = true;
    // });

    // For now, just displaying the thank you message:
    this.showThankYouMessage = true;
  },
},
};

</script>

<style scoped>

.centered-container {
  text-align: center;
}

.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #599f89;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #4a8a70;
}

.thank-you-message {
  color: #599f89;
}


section {
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
.parallax-hero {
  background: url('https://aurorabehaviorservices.com/wp-content/uploads/2018/09/homepage-slider-paris-2.jpg') center/cover no-repeat fixed;
  height: 250px; 
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-quote {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  border-left: 5px solid black; /* Black bar at the left */
  padding-left: 20px;
  margin: 20px 0;
  position: relative;
}
.centered-container {
  width: 70%; /* Takes up half of the screen on desktop */
  margin: 0 auto; /* Centers the container horizontally */
  text-align: center; /* Centers the text inside the container */
  padding: 20px; /* Adds some padding around the content */
  box-sizing: border-box; /* Includes padding in the width calculation */

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    width: 95%; /* Takes up more of the screen on mobile */
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.quote-section {
  background-color: #f0f0f0; /* Light gray background for the section */
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center; /* Center-align the quote */
  width: 50%; /* Set a maximum width */

  /* Media query for mobile devices */
  @media (max-width: 768px) {
  width: 90%; /* Takes up more of the screen on mobile */
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  }
}

h1 {
  font-family: "Times New Roman", serif;
  color: #599f89;
  font-size: 45px; /* Adjust size as needed */
  text-align: center;
  margin-bottom: 15px;
  padding-left: 20px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 20px; /* Adjust as needed */
  padding-bottom: 20px; /* Adjust as needed */
}

h2 {
  color: #5b60a2; /* Dark purple color */
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px; /* Adjust size as needed */
  text-align: left;
  margin: 10px 0;
  padding-left: 20px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 15px; /* Adjust as needed */
  padding-bottom: 0px; /* Adjust as needed */
}

p, ul {
  color: #333; /* You can change this to any shade of black/dark gray */
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  padding-left: 15px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 0px; /* Adjust as needed */
  padding-bottom: 15px; /* Adjust as needed */
}

.quote-section {
  background-color: #f0f0f0; /* Light gray background for the section */
  padding: 10px;
  display: flex;
  justify-content: center; /* Center-align the quote */
  width: 50%; /* Set a maximum width */

  /* Media query for mobile devices */
  @media (max-width: 768px) {
  width: 90%; /* Takes up more of the screen on mobile */
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  }
}

</style>
