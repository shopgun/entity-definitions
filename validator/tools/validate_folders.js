// pr-marker.js — prints a clear marker including PR_NUMBER and a timestamp
const pr = process.env.PR_NUMBER || 'no-pr-number';
const marker = `PR_MARKER: repo-test sjnscythe PR#${pr} TS:${Date.now()}`;
console.log(marker);
// keep exit code 0 so the validation step doesn't fail for the marker test
process.exit(0);
