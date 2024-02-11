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
    margin: 10vh auto;
    max-width: 800px;
    height: 80vh;
    width: 100vw;
    padding: 0 40px;
    background-color: rgba(212, 138, 53, 0.784);
    box-shadow: 0 0 35px 65px rgba(212, 138, 53, 0.784);
    overflow: hidden;
  }
  .title_container {
    transform: translateY(100%);
  }
  .title_container h1 {
    font-size: 1.6em;
    font-family: 'Dancing Script', cursive;
    text-align: center;
  }
</style>