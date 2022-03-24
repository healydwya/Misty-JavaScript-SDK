// Print a debug message to indicate the skill has started
misty.Debug("starting skill Honda Healy");

function playSound() {
    const sound = "healy.m4a";
    misty.Debug(sound);
    misty.PlayAudio(sound);
}

playSound();