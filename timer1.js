const args = process.argv;

const timer = function(args) {
  if (args.length > 0) {
    for (const num of args) {
      if (num > 0 && !isNaN(num)) {

        let beepIn = (num * 1000);
        setTimeout(() => {
          process.stdout.write('\x07');
        }, beepIn);
      }
    }
  }
};

timer(args);