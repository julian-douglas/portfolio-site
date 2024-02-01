<template>
  <div class="layout" :style="{ '--font-color': fontColor, '--background-color': backgroundColor }">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" href="..\favicon.png" type="image/png">
      <link rel="icon" href="data:,">
      <title>Julian Douglas</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    </head>

    <header class="header" style="height: 100px">

      <input type="hidden" name="form-name" value="home-contact"/>


      <strong>
        <g-link to="/" class="logo"><img src="./logo-modified.png" style="height: 100px;"></g-link>
      </strong>

      <div class="mobilenav">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <strong>
            <g-link to="/" class="logo"><img src="./logo-modified.png" style="height: 100px;"></g-link>
          </strong>
          <ul class="sidebarMenuInner">
            <g-link to="/"><li class="nav__link">Home</li></g-link>
            <g-link to="/about/"><li class="nav__link">About</li></g-link>
            <g-link to="/cv/"><li class="nav__link">CV</li></g-link>
            <g-link to="/portfolio/"><li class="nav__link">Portfolio</li></g-link>
            <g-link to="/contact/"><li class="nav__link">Contact</li></g-link>
          </ul>
        </div>
      </div>

      <nav class="nav">

        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/cv/">CV</g-link>
        <g-link class="nav__link" to="/portfolio/">Portfolio</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>

      </nav>
    </header>

    <slot/>

    <footer class="footer">
      <p>&copy; Copyright Julian Douglas 2024</p>
    </footer>

  </div>
</template>
<script>
export default {
  data() {
    return {
      fontColor: 'black',
      backgroundColor: 'white',
      isMenuOpen: false,
    };
  },
  methods: {

  },

};


</script>



<style>

.mobilenav {
  display: none;
}

a {
  text-decoration: none;
  color: var(--font-color);
}


a:hover {
  text-decoration: underline;
}



.layout {
  max-width: 60%;
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--background-color);
  color: var(--font-color);
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

nav {
  font-weight: bold;
}

.nav__link {
  margin-left: 20px;
}



.nav__link:hover::before {
  width: 100%;
}

.footer {
  margin-top: 50px;
  text-align: center;
  color: var(--font-color);
}

@media only screen and (max-width: 768px) {
 
  .mobilenav {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 10;
  }

  #sidebarMenu .logo {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  #sidebarMenu {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 0;
    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;
    background-color: var(--background-color);
    overflow: auto; /* Add this to enable scrolling within the sidebar if needed */
  }
  
  .sidebarMenuInner{
    margin:0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
  }
  .sidebarMenuInner li{
    list-style: none;
    color: var(--font-color);
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    font-family: "Poppins" sans-serif;
    font-size: 20px;
  }
  
  .sidebarMenuInner li:active {
    background-color: var(--font-color);
    color: var(--background-color);
  }
  
  input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
  }
  
  input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }
  .sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
  }
  .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: var(--font-color);
  }
  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
  .diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }
  .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
  }

  nav {
    display: none;
  }

  .nav {
    width: 0;
    overflow: hidden;
    transition: width 0.3s ease;
  }

  .nav.nav--open {
    width: 200px;
    /* Set your desired width for the open menu */
  }

  p,
  li,
  figure {
    font-size: 13px;
  }

.layout {
  max-width: 80%;
}

  .logo {
    text-align: center;
    /* Center the logo horizontally */
    margin-bottom: 10px;
    /* Add some bottom margin for spacing */
  }

  .logo img {
    height: auto;
    /* Allow the height to adjust proportionally */
    max-width: 100%;
    /* Make sure the width doesn't exceed the container */
  }

  .header {
    height: auto;
    /* Adjust the header height for responsiveness */
    flex-direction: column;
    /* Stack items vertically */
    align-items: center;
    /* Center items horizontally */
  }

}
</style>
