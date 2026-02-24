import { execSync } from 'child_process';

try {
  console.log('Running pnpm install to regenerate lockfile...');
  const output = execSync('cd /vercel/share/v0-project && pnpm install --no-frozen-lockfile', {
    encoding: 'utf-8',
    stdio: 'pipe',
    timeout: 120000,
  });
  console.log(output);
  console.log('Lockfile regenerated successfully.');
} catch (error) {
  console.error('Error:', error.message);
  if (error.stdout) console.log('stdout:', error.stdout);
  if (error.stderr) console.error('stderr:', error.stderr);
  process.exit(1);
}
