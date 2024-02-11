<script>
  import Header from '$lib/components/Header.svelte';
  import './styles.css';
</script>

<div class="container">
  <div class="title_container">
    <h1 class="title">Tab Tiger</h1>
  </div>
  <Header />
  <slot />
</div>


<style>
  .container {
    margin: 15vh auto;
    max-width: 800px;
    height: 80vh;
    width: 100vw;
    padding: 0px 40px;
    background-color: rgba(212, 138, 53, 0.884);
    box-shadow: 0 0 35px 65px rgba(212, 138, 53, 0.884);
  }
  .title_container {
    transform: translateY(80%);
  }
  .title_container h1 {
    font-size: 3em;
    font-family: 'Dancing Script', cursive;
    text-align: center;
    font-style: italic;
  }
</style>