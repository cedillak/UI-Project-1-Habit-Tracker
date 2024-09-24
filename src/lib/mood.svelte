<script>
    // Array to hold the selected mood for each day
    let moods = [
        { day: "Mon", mood: "" },
        { day: "Tue", mood: "" },
        { day: "Wed", mood: "" },
        { day: "Thu", mood: "" },
        { day: "Fri", mood: "" },
        { day: "Sat", mood: "" },
        { day: "Sun", mood: "" }
    ];

    // Function to get the mood image based on the selected mood
    function getMoodImage(mood) {
        switch (mood) {
            case "happy": return "src/assets/happy.png";
            case "sad": return "src/assets/sad.png";
            case "average": return "src/assets/average.png";
            case "angry": return "src/assets/angry.png";
            case "tired": return "src/assets/tired.png";
            case "worried": return "src/assets/worried.png";
            default: return ""; // No image for an unselected mood
        }
    }
</script>

<style>
    .mood-tracker {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px; /* More gap between mood items */
    }

    .mood-item {
        display: flex;
        flex-direction: column;
        align-items: center; /* Align day, dropdown, and image centrally */
        gap: 5px;
        min-height: 50px; /* Ensure enough space for the emoji */
        width: 100%; /* Ensure consistent width for each mood item */
    }

    .day-row {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
    }

    select {
        padding: 2px;
        font-family: 'Comic Sans MS', cursive, sans-serif;
    }

    img {
        margin-top: 5px;
        width: 80px;
        height: 80px;
        filter: drop-shadow(5px 2px 7px #00000087);
    }
</style>

<div class="mood-tracker">
    {#each moods as { day, mood }, index}
        <div class="mood-item">
            <div class="day-row">
                <h4>{day}</h4>
                <select bind:value="{moods[index].mood}">
                    <option value="">Select mood</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="average">Average</option>
                    <option value="angry">Angry</option>
                    <option value="tired">Tired</option>
                    <option value="worried">Worried</option>
                </select>
            </div>
            {#if getMoodImage(mood)}
                <img src="{getMoodImage(mood)}" alt="{mood} icon">
            {/if}
        </div>
    {/each}
</div>
