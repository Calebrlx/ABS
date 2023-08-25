<template>
    <div class="parallax-hero"></div>
    <div class="home-page">
        <h1>Frequently Asked Question's</h1>
        <h1>What is ABA?</h1>
        <p>Applied Behavior Analysis is the science of learning and behavior applied to real situations and challenges</p>
        <h1>What can ABA therapy do?</h1>
        <ul>
            <li>Reduce challenging behaviors</li>
            <li>Facilitate learning and independence></li>
            <li>Increase social skills</li>
            <li>Improve communication skills</li>
        </ul>
        <h1>Who is ABA therapy for?</h1>
        <p>All of us learn through the same behavioral principles, therefore ABA can be applied to anyone to change behavior and facilitate learning! However, it is most commonly used for individuals who have a diagnosis of autism spectrum disorder.</p>
        <h1>My child was just diagnosed with autism. How do I go about getting ABA services?</h1>
        <p>Once your doctor has diagnosed your child, you will need a referral for ABA therapy. Once the referral is received, an assessment is scheduled and a BCBA (Board Certified Behavior Analyst) will meet with you and your child to discuss and observe your child’s strengths, challenges, and skill levels in a variety of areas.</p>
        <p>After the assessment is complete, we will contact you to review the recommended intensity of services and what your availability is.</p>
        <h1>My child is above age 18, but still needs help. Can ABA help older individuals?</h1>
        <p>Yes, ABA can help anyone! The principles of behavior and learning are universal and can be applied to any age individual. However, insurance often will not fund ABA therapy for adults. Check with your insurer to determine benefits allowed for ABA services.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FAQsComponent'
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
  </style>
  