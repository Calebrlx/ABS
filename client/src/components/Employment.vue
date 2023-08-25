<template>
  <div class="parallax-hero"></div>
  <div>
    <section>
      <h1>Employment</h1>
      <p>We are hiring for Registered Behavior Technicians. Please submit an application, cover letter, and resume to kellybcba@gmail.com to apply.</p>
      <p href="https://aurorabehaviorservices.com/wp-content/uploads/2020/01/Employment_application.pdf">Employment Application Form</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EmploymentComponent'
}
</script>

<style scoped>

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
  text-align: center;
  padding-left: 15px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
  padding-top: 0px; /* Adjust as needed */
  padding-bottom: 15px; /* Adjust as needed */
}

</style>
