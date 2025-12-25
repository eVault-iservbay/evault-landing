import bellMfbIcon from '@/assets/bell-mfb-icon.svg';

const BellBadge = ({ variant = 'default' }) => {
  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-2 text-xs text-foreground/50">
        <span>Powered by BELL MFB</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <img 
        src={bellMfbIcon} 
        alt="BELL MFB" 
        className="w-8 h-8 opacity-80 rounded-xl"
      />
      <span className="text-foreground/60">
        Powered by{' '}
        <span className="text-primary font-medium">BELL MFB</span>
      </span>
    </div>
  );
};

export default BellBadge;