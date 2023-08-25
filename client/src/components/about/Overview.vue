<template>
  <div class="parallax-hero"></div>
  <div class="getting-started">

    <!-- FAQs Section -->
    <section class="faq-section">
      <div class="home-page centered-container">
        <h1>About Us</h1>    
      </div>
    </section>

    <!-- Client Forms Section -->
    <section class="client-forms-section">
      <div>
        <h1>Meet the team</h1>
      </div>
      <div>
        <h1>Kelly Forestal</h1>
        <p>(MA, BCBA, LBA)</p>
      </div>
      <div>
        <h1>Amanda Sparks</h1>
        <p>(BA, BCaBA)</p>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.getting-started {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
}

section {
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
}

h2 {
  font-size: 18px;
  margin: 10px 0;
}

p, ul {
  line-height: 1.6;
  font-size: 16px;
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

.centered-container {
  width: 70%; /* Takes up half of the screen on desktop */
  margin: 0 auto; /* Centers the container horizontally */
  text-align: center; /* Centers the text inside the container */
  padding: 20px; /* Adds some padding around the content */
  box-sizing: border-box; /* Includes padding in the width calculation */

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    width: 95%; /* Takes up more of the screen on mobile */
    padding: 0;
  }
}

h1 {
  font-family: "Times New Roman", serif;
  color: #599f89;
  font-size: 45px; /* Adjust size as needed */
  text-align: center;
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
  padding-left: 20px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 15px; /* Adjust as needed */
  padding-bottom: 0px; /* Adjust as needed */
}

p {
  color: #333; /* You can change this to any shade of black/dark gray */
  font-family: Arial, sans-serif;
  font-size: 16px; /* Adjust size as needed */
  text-align: left;
  padding-left: 15px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 0px; /* Adjust as needed */
  padding-bottom: 15px; /* Adjust as needed */
}


</style>
