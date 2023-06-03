export default defineEventHandler(async () => {
  const loadingPromise = () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('resolved promise');
        resolve();
      }, 3000);
    });

  await loadingPromise();

  return true;
});
