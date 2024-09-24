<script>
  import UserOverview from './lib/UserOverview.svelte';
  import Journal from './lib/notes.svelte';
  import Habits from './lib/habits.svelte';
  import Mood from './lib/mood.svelte';
  import { onMount } from 'svelte';

  let currentDate = new Date();
  let currentMonth;
  let selectedWeek = 1; // Start at week 1
  const totalWeeks = 4; // Total number of weeks in the month

  const getMonthName = (date) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
  };

  const changeWeek = (direction) => {
    selectedWeek += direction;
    // Wrap around the weeks
    if (selectedWeek > totalWeeks) selectedWeek = 1;
    if (selectedWeek < 1) selectedWeek = totalWeeks;

    currentMonth = getMonthName(currentDate);
  };

  onMount(() => {
    currentMonth = getMonthName(currentDate);
  });
</script>

<h1>Habit & Goal Tracker</h1>

<div class="header">
  <UserOverview />
</div>

<!-- Week Navigation -->
<div class="week-navigation">
  <button on:click={() => changeWeek(-1)}>Previous</button>
  <div class="week-display">
    <h2>{currentMonth}</h2>
    <h3>Week {selectedWeek}</h3>
  </div>
  <button on:click={() => changeWeek(1)}>Next</button>
</div>

<main class="layout">
  <div class="notes">
    <Journal />
  </div>

  <div class="content">
    <div class="habits">
      <Habits />
    </div>
    <div class="mood">
      <Mood />
    </div>
  </div>
</main>

<style>
  /* Ensure the body takes full height and allows scrolling */
  :global(body), :global(html) {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  /* Main layout grid */
  .layout {
    display: grid;
    grid-template-columns: 1fr 4fr; /* 1/5 for notes, 4/5 for the content */
    gap: 1rem;
    padding: 1rem;
  }

  /* Header stretches across both columns */
  .header {
    grid-column: span 2; /* Make header span both columns */
    background-color: rgb(255, 255, 255);
    padding: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* Notes section takes 1/5 of the screen width */
  .notes {
    grid-column: span 1;
    background-color: #ff000031;
    padding: 1rem;
    border-radius: 8px;
  }

  /* Content section uses grid to arrange habits (3/5) and mood (1/5) side by side */
  .content {
    display: grid;
    grid-template-columns: 3fr 1fr; /* 3/5 for habits, 1/5 for mood */
    gap: 1rem;
    background-color: white;
    padding: 1rem;
  }

  /* Habits section */
  .habits {
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 8px;
  }

  /* Mood section */
  .mood {
    background-color: #ff000031;
    padding: 1rem;
    border-radius: 8px;
  }

  /* Week Navigation */
  .week-navigation {
    background-color: #F7A9A8;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .1rem 0;
    gap: 1rem; /* Add spacing between buttons and the display */
  }

  .week-display {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .week-display h2 {
    margin: 0;
  }

  .week-display h3 {
    margin: 0;
  }
</style>
