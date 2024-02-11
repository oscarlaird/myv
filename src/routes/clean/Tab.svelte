<script>
    import { onMount } from "svelte";
    export let tab = {}; // Assuming the fourth element is the description
    // Placeholder image URL - replace with your actual image URL
    // const imageUrl = "https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg";
    // $: imageUrl = JSON.parse(tab[3])['og:image'];
    // try to parse JSON otherwise use default image

    // let imageUrl = "https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg";
    $: imageUrl = tab?.opengraph?.[0]?.['og:image'];
    $: bestTitle = tab?.opengraph?.[0]?.['og:title'] || tab?.title || tab?.url;

    function jump() {
        console.log('Jumping to', tab.url);
        window.parent.postMessage({type: 'jump', url: tab.url}, '*');
    }
</script>

<style>
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 6px;
        margin: 0 0 8px 0; /* Spacing between cards */
        transition: box-shadow 0.3s ease;
        background-color: #f0f0f0;
    }
    
    .card:hover {
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    .link {
        text-decoration: none;
        color: #505050;
        margin-bottom: 8px; /* Added margin for spacing between the title and description */
    }

    .content {
    }

    .description {
        margin-top: 4px; /* Spacing between the content and description */
        font-size: small;
        color: #505050;
    }

    .card img {
        width: 100px; /* Example width, adjust as needed */
        height: auto; /* Maintain aspect ratio */
        border-radius: 4px; /* Optional: rounds the corners of the image */
    }
</style>

<div class="card" on:click={jump}>
    <div class="content">
        <div class="title_text"> {bestTitle} </div>
        <div class="description">{tab.text}</div>
    </div>
    {#if imageUrl}
        <img src={imageUrl} >
    {/if}
</div>