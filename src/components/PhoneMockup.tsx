interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ screenshot, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 220 }}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 p-1.5 shadow-phone">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden bg-card">
          <img src={screenshot} alt={alt} className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
