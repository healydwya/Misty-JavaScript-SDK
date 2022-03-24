// Print a debug message to indicate the skill has started
misty.Debug("starting skill Honda");

function playSound() {
    const sound = "misty.m4a";
    misty.Debug(sound);
    misty.PlayAudio(sound);
}

playSound();