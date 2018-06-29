<template>
    <div class="container">
        <a class="link" href="http://radio.meta.gov.co/app/1063/" target="blank"><img src="../assets/radio3.png"></a>
        <a class="text hidden" href="#"><img src="../assets/radio1.png"></a>
        <a class="link" href="http://radio.meta.gov.co/app/llanerisima.html" target="blank"><img src="../assets/radio2.png"></a>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
.text {
  display: flex;
  width: 100%;
}
.text img {
  display: flex;
  width: 100%;
  object-fit: contain;
}
.link {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.link img {
  width: 100%;
  object-fit: contain;
  transition: all 500ms ease-in-out;
}
.link img:hover {
  filter: saturate(1.5);
  transform: scale(1.05);
}
@media screen and (max-width: 600px) {
  .hidden {
    display: none;
  }
  .link img {
    max-height: 40px;
  }
}
</style>
