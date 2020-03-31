mp.events.add("playerCreateWaypoint", (position) => {
    mp.console.logInfo(`New waypoint created at: ${position.x}, ${position.y}, ${position.z}`);
   });

