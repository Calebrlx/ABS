<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style="margin-left: 20px;">
          <img src="https://aurorabehaviorservices.com/wp-content/uploads/2019/11/400dpiLogo.png" alt="Logo" class="logo-image">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0"> 
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About us</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/getting-started">Getting Started</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/employment">Employment</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav> 
    <router-view></router-view>
    <footer class="footer">
    <div class="contact-info">
      <h3>Contact Information</h3>
      <div><i class="icon-address"></i> 16331 Heritage Place, Suite 101 Eagle River AK 99577</div>
      <div><i class="icon-phone"></i> (907) 350-8893</div>
      <div><i class="icon-email"></i> kellybcba@gmail.com</div>
      <div class="connect-online">
        <i class="icon-facebook"></i> <a href="https://www.facebook.com" target="_blank">Facebook</a>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2023 ~/Caleb </p>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  margin-left: 20px; /* 20-pixel margin to the left of the logo */
}

.navbar-nav {
  margin-right: 20px; /* 20-pixel margin to the right of the nav items */
}

.navbar-nav .nav-link {
  color: #5b60a2 !important; /* Dark purple color */
}

.navbar-nav .active {
  border-bottom: 3px solid #5b60a2; /* Dull purple underline for selected item */
}

.footer {
  background-color: #5b60a2; /* Dark purple */
  color: white;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding: 20px;
}

.contact-info {
  margin: 20px 0;
}

.contact-info div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
}

.icon-address, .icon-phone, .icon-email, .icon-facebook {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.copyright p {
  font-size: 10px; /* Stack the icons and text verticall ds */
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.logo-image {
  max-height: 50px;
  width: auto; /* This ensures that the width is automatically adjusted */
}

@media (max-width: 768px) {
  .navbar-nav .nav-link {
    font-size: 14px; /* Adjust the font size for mobile */
    padding: 5px 10px; /* Adjust the padding for mobile */
  }
  
  .footer {
    padding: 10px; /* Adjust the footer padding for mobile */
  }

  .contact-info div {
    flex-direction: column; /* Stack the icons and text verticall ds */
  }

  .container-fluid {
    flex-direction: column;
  }
  .navbar-nav {
    margin-right: 0;
  }
}

</style>