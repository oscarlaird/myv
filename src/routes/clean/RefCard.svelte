<script>
    import {slide} from 'svelte/transition';
    export let tab = {};
    // const imageUrl = "https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg";
    $: imageUrl = tab?.opengraph?.[0]?.['og:image'];
    $: bestTitle = tab?.opengraph?.[0]?.['og:title'] || tab?.title || tab?.url;


    function jump() {
        console.log('jumping to', tab.url);
        window.parent.postMessage({type: 'jump', url: tab.url}, '*'); // '*' means any origin
    }
</script>

<div class="card" on:click={jump} in:slide={{ duration: 400 }}>
    <div class="content">
        {bestTitle}
        {#if imageUrl}
            <img src={imageUrl} >
        {/if}
    </div>
    <div class="description">{tab.text}</div>
</div>


<style>
       .link {
        text-decoration: none;
        color: #505050;
        margin-bottom: 8px; /* Added margin for spacing between the title and description */
    }

    .small_square_tab_card {
        width: 100%;
        height: 100px;
        background-color: #f0f0f0;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }
    .small_square_tab_card a {
        text-decoration: none;
        color: black;
    }
    .small_square_tab_card a:hover {
        color: blue;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%; /* Ensure content fills the card width */
    }

    .description {
        margin-top: 4px; /* Spacing between the content and description */
        font-size: small;
        color: #505050;
    }

    .card img {
        margin-left: 16px; /* Spacing between text and image */
        width: 100px; /* Example width, adjust as needed */
        height: auto; /* Maintain aspect ratio */
        border-radius: 4px; /* Optional: rounds the corners of the image */
    }
    .card {
        display: flex;
        flex-direction: column; /* Changed to stack items vertically */
        align-items: flex-start; /* Align items to the start of the flex container */
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 6px;
        margin: 8px 0 6px 0; /* Spacing between cards */
        transition: box-shadow 0.3s ease;
        background-color: #f0f0f0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
</style>
