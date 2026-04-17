import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

interface EyoraButtonProps {
  to?: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'white';
  hoverStyle?: 'default' | 'darkBlue';
  className?: string;
  fullWidth?: boolean;
}

const EyoraButton = ({ to, text, onClick, type = 'button', variant = 'primary', hoverStyle = 'darkBlue', className = '', fullWidth = false }: EyoraButtonProps) => {
  const handleMouseEvent = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const baseClasses = `inline-flex items-center gap-2 h-[50px] px-7 rounded-full font-medium text-[15px] transition-all duration-400 group ${fullWidth ? 'w-full justify-center' : ''} ${className}`;
  
  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = hoverStyle === 'darkBlue' 
      ? 'bg-primary text-primary-foreground btn-pos-aware-dark' 
      : 'bg-primary text-primary-foreground btn-pos-aware';
  } else {
    variantClasses = 'bg-white text-secondary btn-pos-aware-white';
  }

  const iconClasses = (variant === 'white' || (variant === 'primary' && hoverStyle === 'darkBlue'))
    ? 'bg-secondary text-white group-hover:bg-white group-hover:text-secondary transition-colors duration-400'
    : 'bg-secondary text-white';

  const isDynamicIcon = variant === 'white' || (variant === 'primary' && hoverStyle === 'darkBlue');

  const content = (
    <>
      <span className="relative z-10">{text}</span>
      <span className={`relative z-10 w-10 h-10 -mr-4 rounded-full flex items-center justify-center shrink-0 ${iconClasses}`}>
        {isDynamicIcon ? (
          <>
            <ArrowIcon className="w-6 h-6 text-white group-hover:hidden transition-colors duration-400" />
            <ArrowIcon className="w-6 h-6 hidden group-hover:block text-[#15224D] transition-colors duration-400" />
          </>
        ) : (
          <ArrowIcon className="w-6 h-6 text-white" />
        )}
      </span>
    </>
  );

  if (to) {
    return <Link to={to} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent} className={`${baseClasses} ${variantClasses}`}>{content}</Link>;
  }

  return <button type={type} onClick={onClick} onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent} className={`${baseClasses} ${variantClasses}`}>{content}</button>;
};

export default EyoraButton;
