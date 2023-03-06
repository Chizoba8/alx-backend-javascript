const msg = 'Welcome to Holberton School, what is your name?';
const res = 'Your name is: ';
const ext = 'This important software is now closing';

process.stdout.write(`${msg}\n`);
process.stdin.on('readable', () => {
  const ch = process.stdin.read();
  if (ch) {
    process.stdout.write(res + ch);
  }
});

process.stdin.on('end', () => {
  process.stdout.write(`${ext}\n`);
});
