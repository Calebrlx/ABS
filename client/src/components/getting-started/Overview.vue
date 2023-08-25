<template>
  <div class="parallax-hero"></div>
  <div>

    <!-- FAQs Section -->
    <section>
      <div class="centered-container">
        <h1>Frequently Asked Question's</h1>
        <h2>What is ABA?</h2>
        <p>Applied Behavior Analysis is the science of learning and behavior applied to real situations and challenges</p>
        <h2>What can ABA therapy do?</h2>
        <ul style="text-align: left;">
            <li>Reduce challenging behaviors</li>
            <li>Facilitate learning and independence></li>
            <li>Increase social skills</li>
            <li>Improve communication skills</li>
        </ul>
        <h2>Who is ABA therapy for?</h2>
        <p>All of us learn through the same behavioral principles, therefore ABA can be applied to anyone to change behavior and facilitate learning! However, it is most commonly used for individuals who have a diagnosis of autism spectrum disorder.</p>
        <h2>My child was just diagnosed with autism. How do I go about getting ABA services?</h2>
        <p>Once your doctor has diagnosed your child, you will need a referral for ABA therapy. Once the referral is received, an assessment is scheduled and a BCBA (Board Certified Behavior Analyst) will meet with you and your child to discuss and observe your child’s strengths, challenges, and skill levels in a variety of areas.</p>
        <p>After the assessment is complete, we will contact you to review the recommended intensity of services and what your availability is.</p>
        <h2>My child is above age 18, but still needs help. Can ABA help older individuals?</h2>
        <p>Yes, ABA can help anyone! The principles of behavior and learning are universal and can be applied to any age individual. However, insurance often will not fund ABA therapy for adults. Check with your insurer to determine benefits allowed for ABA services.</p>
    </div>
    </section>

    <!-- Client Forms Section -->
    <section>
      <div class="centered-container">
        <h1>Client Forms</h1>
        <p>If you are new, please feel free to fill out these intake forms before our first session. These forms can also be filled out during the first session.</p>
        <a href="https://aurorabehaviorservices.com/wp-content/uploads/2019/11/ABS_New_Client_Intake.docx">Client Intake Form</a>
        <p>Please use the following form when requesting communication between school staff, other therapy providers, or medical providers.</p>
        <a href="https://aurorabehaviorservices.com/wp-content/uploads/2018/09/Authorization-for-Release-of-Information-copy.pdf">Authorization for Release of Information</a>
      </div>
    </section>

    <!-- Insurance and Payment Section -->
    <section>
      <div class="centered-container">
        <h1>Insurance & Payment</h1>
        <p>Aurora Behavior Services is in-network with Tricare West, Alaska Medicaid and Premera Blue Cross Blue Shield of Alaska. We work with other insurance companies as well, so please feel free to ask us about your plan.</p>
        <h2>Payment</h2>
        <p>We accept cash, check and all major credit cards as forms of payment. We also accept payment via PayPal and you can pay directly on my site on this page.</p>
        <h2>Cancellation Policy</h2>
        <p>If you need to cancel your child’s session, please do so at least 24 hours in advance if possible, or in the case of an emergency or sudden illness, as soon as possible.</p>
        <h2>Any Other Questions</h2>
        <p>Please contact us for any additional questions you may have. We look forward to hearing from you!</p>
      </div>
    </section>

    <!-- Services Section -->
    <section>
      <div class="centered-container">
        <h2>Clinic Services</h2>
        <p>We provide services in our Eagle River clinic. There are opportunities for socialization, structured activities, and play. For school-aged children, we provide clinic-based services before and after school and also during the summer.</p>
        <h2>In-Home Services</h2>
        <p>Within a certain radius of our Eagle River clinic (typically includes Eagle River, Chugiak, JBER, and some parts of East Anchorage), we can provide in-home services to assist with generalization and build skills in these settings.</p>
        <h2>School Services</h2>
        <p>School ABA services can be provided in your child’s school contingent on teacher and principal approval.</p>
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

section {
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #f5f5f5;
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

</style>
