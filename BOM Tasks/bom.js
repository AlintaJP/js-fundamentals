const browserWidthHight = () => {
  window.onresize = () => {
    console.log(
      `Current window height: ${window.innerHeight}\nCurrent window width: ${window.innerWidth}`
    );
  };
};

const setUrlParameter = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.location.href = url.href;
};

const setUrlHashParameter = (param, value) => {
  const currentHash = window.location.hash.substr(1);
  let searchParams = new URLSearchParams(currentHash);
  searchParams.set(param, value);
  searchParams.toString();
  window.location.hash = searchParams;
};

const printBrowserInfo = () => {
  console.log(window.navigator);
  console.log(`Device pixel ratio: ${window.devicePixelRatio}`);
  console.log(`Current location: ${window.location}`);
  console.log(`Outer height: ${window.outerHeight}`);
  console.log(`Outer width: ${window.outerWidth}`);
};
