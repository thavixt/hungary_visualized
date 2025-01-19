import loaderSvg from '../assets/infinite-spinner.svg';

export function Loader() {
  return (
    <div className="loader">
      <p>Loading...</p>
      <img src={loaderSvg} alt="Loading..." />
    </div>
  );
}