<script>
  import { onMount, onDestroy } from 'svelte';

  let userName = 'Ana Cedillo'; // Replace with dynamic user name if needed
  let currentDate = '';
  let daysSinceStart = 0;
  let daysActive = 0;

  // Example start and end dates for demonstration
  const startDate = new Date('2024-09-01'); // Replace with actual start date
  const lastActiveDate = new Date('2024-09-01'); // Replace with actual last active date

  onMount(() => {
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      currentDate = now.toLocaleString();

      // Calculate days since start
      const timeDiff = now.getTime() - startDate.getTime();
      daysSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      // Calculate days active
      const activeTimeDiff = now.getTime() - lastActiveDate.getTime();
      daysActive = Math.floor(activeTimeDiff / (1000 * 60 * 60 * 24));
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Initial call to set values immediately

    // Cleanup the interval when the component is destroyed
    onDestroy(() => {
      clearInterval(intervalId);
    });
  });
</script>

<header class="header-bar">
  <div class="header-content">
    <p><strong>Name:</strong> {userName}</p>
    <p><strong>Current Date/Time:</strong> {currentDate}</p>
    <p><strong>Days Since Beginning:</strong> {daysSinceStart}</p>
    <p><strong>Days Active:</strong> {daysActive}</p>
  </div>
</header>

<style>
  .header-bar {
    padding: 1em;
    width: 100%;
    top: 0;
    left: 0;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
</style>
