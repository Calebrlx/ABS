<template>
    <div>
      <div class="parallax-hero">
        <div class="hero-content">
          <h1 class="hero-text">Excellence in Applied Behavior Analysis</h1>
          <button @click="sayHello">Contact Us Today</button>
        </div>
      </div>
        <div class="home-page">
            <h1 class="welcome-title">Welcome</h1>
            <p class="paragraph-text centered-container">Aurora Behavior Services delivers applied behavior analysis intervention to children of all ages. Our team of Board Certified Behavior Analysts and Registered Behavior Technicians provide services in our Eagle River clinic, in-home sessions, community sessions, as well as in the Anchorage School District throughout Anchorage and Eagle River.</p>
            <section class="quote-section centered-container">
              <blockquote class="custom-quote">
                The quality of human life...depends on finding ways to make everyone's environment more nurturing...
                <cite class="quote-author">- Anthony Biglan -</cite>
              </blockquote>
            </section>
            <p class="paragraph-text centered-container">We specialize in providing individualized treatment programming to each of our clients depending on their needs. Aurora Behavior Services strives to deliver the gold standard when it comes to functional behavior assessments and designing treatment plans to best serve the children we work with, their family and the entire treatment team. We believe every child deserves to have access to a variety of activities, education, and social situations not limited by a diagnosis.</p>
            <p class="paragraph-text centered-container">If you are looking for extra support for your child for anything from daily basic living skills, communication skills, dealing with challenging behaviors, gaining social skills, or to help with specific community or school settings please contact us for a consultation to see how we can best assist you.</p>
            <button @click="sayHello">See Services</button>
        </div>
        <div>
            <h1 class="map-title">Need Help Finding the Office?</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.5079236083438!2d-149.57984192290348!3d61.32449897564138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8eb6da02f61b9%3A0x3d19b9d6ae7d8b70!2s16331%20Heritage%20Pl%20%23101%2C%20Eagle%20River%2C%20AK%2099577!5e0!3m2!1sen!2sus!4v1692511774243!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
export default {
name: 'HomeComponent',
methods: {
    sayHello() {
    alert('Hello from Vue!');
    }
}
}
</script>

<style scoped>
.parallax-hero {
/* Replace with your image URL */
background: url('https://aurorabehaviorservices.com/wp-content/uploads/2018/09/homepage-slider-paris-2.jpg') center/cover no-repeat fixed;
height: 500px; /* Adjust based on your preference */
display: flex;
align-items: center;
justify-content: center;
}
.hero-content {
text-align: center;
color: white; /* Adjust text color to suit your background */

}
.hero-text {
  font-family: 'Times New Roman', Times, serif;
  font-size: 60px; /* Adjust size as needed */
  margin-top: 50px;
  margin-bottom: 50px;
}
.home-page {
text-align: center;
margin: 40px;
}

button {
background-color: #42b983;
color: white;
padding: 10px 20px;
border: none;
cursor: pointer;
font-size: 16px;
}

button:hover {
background-color: #2a8f66;
}
.welcome-title {
  color: #5b60a2; /* Dark purple color */
  font-family: 'Times New Roman', Times, serif;
  font-size: 45px; /* Adjust size as needed */
  margin-top: 50px;
  margin-bottom: 20px; /* 50 pixel gap after the welcome text */
}
.map-title {
  color: #5b60a2; /* Dark purple color */
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px; /* Adjust size as needed */
  margin-top: 50px;
  margin-bottom: 30px; /* 50 pixel gap after the welcome text */
}
.paragraph-text {
  color: black;
  font-size: 16px; /* Adjust size as needed */
  margin-top: 25px;
  margin-bottom: 20px; /* Spacing between paragraphs, adjust as needed */
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

.custom-quote {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  border-left: 5px solid black; /* Black bar at the left */
  padding-left: 20px;
  margin: 20px 0;
  position: relative;
}

.quote-author {
  font-family: 'Times New Roman', Times, serif;
  font-style: normal; /* Plain text for the author */
  display: block; /* Display on a new line */
  margin-top: 10px;
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

</style>
