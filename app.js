console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");



function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
    let userWatchingLiveStream = true;
    let watching = new Promise((resolve, reject) => {
        if (success) {
          resolve(userWatchingLiveStream);
        } else {
          reject(userLeft);
        }
      });
      if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingLiveStream) {
      callback("Thumbs up and Subscribe");
    }
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );
}