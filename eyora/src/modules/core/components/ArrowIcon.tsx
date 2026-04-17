export const ArrowIcon = ({ className = 'text-white' }: { className?: string }) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M32.4012 18.3357C28.5004 18.3357 24.9452 14.634 24.9452 10.569V8.90234H21.7452V10.569C21.7452 13.5257 22.99 16.299 24.9436 18.3357H5.20117V21.669H24.9436C22.99 23.7056 21.7452 26.479 21.7452 29.4356V31.1024H24.9452V29.4356C24.9452 25.3706 28.5004 21.669 32.4012 21.669H34.0012V18.3357H32.4012Z" 
      fill="currentColor"
    />
  </svg>
);

export default ArrowIcon;
