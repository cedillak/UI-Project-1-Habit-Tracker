<script>
  let habits = [
    { name: "Sleep at least 7 hours", track: Array(7).fill(false), goal: 7 },
    { name: "Exercise", track: Array(7).fill(false), goal: 5 },
    { name: "Read for 30 mins", track: Array(7).fill(false), goal: 5 }
  ];
  let newHabit = "";
  let newGoal = 5;
  let showAddModal = false;
  let showEditModal = false;
  let editHabitIndex = null;

  // Function to add a habit
  function addHabit() {
    if (newHabit.trim()) {
      habits = [...habits, { name: newHabit, track: Array(7).fill(false), goal: newGoal }];
      newHabit = "";
      newGoal = 5; // Reset goal to default
      showAddModal = false;
    }
  }

  // Function to delete a habit
  function deleteHabit(index) {
    habits = habits.filter((_, i) => i !== index);
  }

  // Function to open edit modal
  function openEditModal(index) {
    editHabitIndex = index;
    newHabit = habits[index].name;
    newGoal = habits[index].goal;
    showEditModal = true;
  }

  // Function to save edited habit
  function saveHabit() {
    if (editHabitIndex !== null) {
      habits[editHabitIndex].name = newHabit;
      habits[editHabitIndex].goal = newGoal;
    }
    newHabit = "";
    newGoal = 5; // Reset goal to default
    showEditModal = false;
    editHabitIndex = null;
  }

  // Calculate progress for each habit
  function getProgress(habit) {
    const completed = habit.track.filter(Boolean).length;
    return `${completed}/${habit.goal}`;
  }

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
</script>

<div class="container">
  <div class="header">
    <button class="edit-habit-btn" on:click={() => showEditModal = true}>Edit</button>
    <h2>Habits</h2>
    <button class="add-habit-btn" on:click={() => showAddModal = true}>+ Add Habit</button>
  </div>

  <div class="days-of-week">
    <span>Habit</span>
    {#each daysOfWeek as day}
      <span>{day}</span>
    {/each}
    <span>Progress</span> <!-- New progress column -->
  </div>

  {#each habits as habit, index}
    <div class="tracker">
      <span>{habit.name}</span>
      {#each habit.track as checked, i}
        <input
          type="checkbox"
          class="checkbox"
          bind:checked={habit.track[i]}
        />
      {/each}
      <span>{getProgress(habit)}</span> <!-- Display progress -->
    </div>
  {/each}
</div>

{#if showAddModal}
<div class="modal-overlay" role="button" tabindex="0" on:click={() => showAddModal = false} on:keydown={(e) => { if(e.key === 'Enter' || e.key === ' ') showAddModal = false }}></div>
  <div class="modal">
    <h3>Add New Habit</h3>
    <div class="habit-item">
      <input
      type="text"
      placeholder="New habit"
      bind:value={newHabit}
    />
    <label>Goal: </label>
    <input
      type="number"
      placeholder="Goal (times per week)"
      bind:value={newGoal}
      min="1"
    />
    </div>
    <button class="add-button" on:click={addHabit}>Add</button>
  </div>
{/if}

{#if showEditModal}
  <div class="modal-overlay" on:click={() => showEditModal = false}></div>
  <div class="modal">
    <h3>Edit Habits</h3>
    <div class="habit-list">
      {#each habits as habit, index}
        <div class="habit-item">
          <input
            type="text"
            value={habit.name}
            on:input={(e) => habits[index].name = e.target.value}
            style="flex: 1; margin-right: 10px;"
          />
          <label>Goal: </label>
          <input
            type="number"
            value={habit.goal}
            min="1"
            on:input={(e) => habits[index].goal = +e.target.value}
            style="width: 60px; margin-right: 10px;"
          />
          <button class="delete-button" on:click={() => deleteHabit(index)}>Delete</button>
        </div>
      {/each}
    </div>
    <button on:click={() => showEditModal = false}>Done</button>
  </div>
{/if}
