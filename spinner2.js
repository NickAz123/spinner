let animations = "|/-\\|/-\\|"
 
const spinner2 = (animations) => {
  let time = 0;
  for (const char of animations){
    setTimeout(() => {
      process.stdout.write('\r' + char);
    }, time);
    time += 200;
  }
  setTimeout(() => {
    console.log(``)
  }, time)
}

spinner2(animations);