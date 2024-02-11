<script>
    export let tab = [0, "", "", ""]; // Assuming the fourth element is the description
    // Placeholder image URL - replace with your actual image URL
    const imageUrl = "https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg";

    function jump() {
        console.log('Jumping to', tab[1]);
        window.parent.postMessage({type: 'jump', url: tab[1]}, '*');
    }
</script>

<style>
    .card {
        display: flex;
        flex-direction: column; /* Changed to stack items vertically */
        align-items: flex-start; /* Align items to the start of the flex container */
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 8px;
        transition: box-shadow 0.3s ease;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%; /* Ensure content fills the card width */
    }

    .description {
        margin-top: 8px; /* Spacing between the content and description */
    }

    .card img {
        margin-left: 16px; /* Spacing between text and image */
        width: 100px; /* Example width, adjust as needed */
        height: auto; /* Maintain aspect ratio */
        border-radius: 4px; /* Optional: rounds the corners of the image */
    }
</style>

<div class="card" on:click={jump}>
    <div class="content">
        <a class="link" href={tab[1]} target="_blank" rel="noopener noreferrer">{tab[2]}</a>
        <img src={imageUrl} alt="Description of Image">
    </div>
    <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </div>
</div>