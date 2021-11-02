function getDeviceTheme() {
  console.log('useEffect');
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkThemeMq.matches) {
    // Device has the dark theme enabled
    console.log('id dark');
    return 'dark';
  }
  // Device has the light theme enabled
  return 'light';
}

export { getDeviceTheme };
