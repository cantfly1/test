<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>


* {
 
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 100%;
}
header{
  display: flex;
  width: 100%;
}


img {
  max-width: 100%;
  border-radius: 8px;
}

.card {
  margin-top: 5rem;

  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.card__title {
  text-align:left;
  font-weight: 50;
  font-size: 20px;
}

.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}
.form-row{
  justify-content: center;
}

  .button {
    background: #2196F3;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 50%;
    padding: 16px;
    transition: .4s background-color;
  }

  .card__action {
    color:#2196F3;
    text-decoration: underline;
  }

  .card__action:hover {
    cursor:pointer;
  }

  .button:hover {
    cursor:pointer;
    background: #1976D2;
  }

 

</style>
