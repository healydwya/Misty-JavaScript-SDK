// Drive misty in straight line for 20 seconds
function drive() {

    misty.Drive(10, 0, 0, 10000);
}

// Print a debug message to indicate the skill has started
misty.Debug("starting skill HRI");

drive();
misty.Stop();