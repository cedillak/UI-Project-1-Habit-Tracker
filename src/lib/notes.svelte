<script>
    let notes = [];
    let newNote = '';

    function addNote() {
        if (newNote.trim() !== '') {
            notes = [newNote, ...notes]; // Add new note to the beginning of the array
            newNote = ''; // Clear input after adding
        }
    }
</script>

<style>
    button {
        background-color: #f5f5f5;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #eee;
    }

    .notes-container {
        display: flex;
        flex-wrap: wrap; /* Allows wrapping to next line if there's not enough space */
    }

    .sticky-note {
        background-image: url('https://wallpapers.com/images/hd/blank-yellow-post-it-note-nq7lnd2kbtkunutk-nq7lnd2kbtkunutk.jpg');
        background-size: cover;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        padding: 30px;
        color: black;
        font-weight: bold;
        font-family: 'Comic Sans MS', cursive, sans-serif;
        filter: drop-shadow(2px 2px 5px #0000006b);
    }

    /* Style the textarea */
    textarea {
        width: 200px; /* Adjust width as needed */
        height: 100px; /* Adjust height as needed */
        font-family: 'Comic Sans MS', cursive, sans-serif;
        font-size: 16px; /* Adjust font size if needed */
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    /* Style the placeholder */
    textarea::placeholder {
        font-family: 'Comic Sans MS', cursive, sans-serif;
        color: gray; /* Change color if needed */
    }
</style>

<div>
    <h2>Weekly Notes</h2>
    <textarea bind:value={newNote} placeholder="Write your note here..."></textarea>
    <button on:click={addNote}>Add Note</button>
    
    <div class="notes-container">
        {#each notes as note}
            <div class="sticky-note">{note}</div>
        {/each}
    </div>
</div>
