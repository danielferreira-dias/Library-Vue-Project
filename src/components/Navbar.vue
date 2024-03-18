<template>
    <div class="navbar">
        <div class="navbar-Option">
          <img src="../assets/vue.svg" alt="">
        </div>
        <div class="navbar-Option-Right">
          <div class="navbar-Option">
              <button>Home</button>
          </div>
          <div class="navbar-Option">
              <button>About</button>
          </div>
          <div class="navbar-Option">
              <button>Contact</button>
          </div>
          <div v-if="userIsLogged" class="navbar-Option">
              <p>Welcome {{ user.name }}</p>
          </div>
        </div>
    </div>
    <!-- <div class="navBar-Border"></div> -->
</template>
  
  <script>
  export default {
    name: 'Navbar',
    data(){
        return {
            userIsLogged: true,
            user: {
                name: "Daniel Dias",
                typeofUser: "Admin",
            }
        }
    }
  }
  </script>
  
  <style>

  .navbar {
    width: 100%;
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
  }

  .navbar-Option-Right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .navBar-Border{
    width: 20%;
    border-width: 0px;
    border-bottom: 1px groove rgba(255, 255, 255, 0.5); /* Border color with reduced opacity */
    border-style: groove;
    margin: auto;
  }

  .navbar-Option > p {
    margin: 0;
    padding: 5px 15px;
    font-size: 1.1rem;
  }

  .navbar-Option > button {
    background-color: #0f0e0e;
    color: white;
    padding: 5px 15px;
    border-width: 0;
    border-right: 1px solid white; 
    font-size: 1.5rem;
  }

  .navbar-Option > button:hover {
    background-color: #333333;
  }

  .navbar-Option > img {
    padding: 5px 15px;
  }


  

  </style>