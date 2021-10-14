// Drive misty in straight line for 20 seconds
function drive() {

    misty.Drive(10, 0, 0, 10000);
}

// Print a debug message to indicate the skill has started
misty.Debug("starting skill HRI");

// Issue command to fetch list of audio clips
misty.GetAudioList();

// Callback to handle data returned by GetListOfAudioClips()
function _GetAudioList(data) {
    // Check if data was received
    if (data) {
        // Capture the array of files
        let audioArr = data.Result;

        // Generate a random number and use it to choose a filename at 
        // random from the list
        let randNum = Math.floor(Math.random() * audioArr.length);
        let randSound = audioArr[randNum].Name;
        // Print the name of the file
        misty.Debug(randSound);
        // Issue command to play the audio clip
        misty.PlayAudio(randSound, 50, 5000);
    }
}

drive();
misty.Stop();