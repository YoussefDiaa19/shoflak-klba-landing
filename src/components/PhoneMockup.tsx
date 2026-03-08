interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ screenshot, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto w-full max-w-[220px] ${className}`}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[5px] border-foreground/90 bg-foreground/90 p-1 shadow-phone">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-foreground/90 rounded-b-xl z-10" />
        {/* Screen - clips content, crops the navy border from screenshots */}
        <div className="rounded-[2rem] overflow-hidden bg-card">
          <img
            src={screenshot}
            alt={alt}
            className="w-full h-auto block scale-[1.12]"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
