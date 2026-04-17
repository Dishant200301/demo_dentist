interface SectionLabelProps {
  text: string;
  center?: boolean;
  light?: boolean;
}

const SectionLabel = ({ text, center = false, light = false }: SectionLabelProps) => (
  <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
    <span className="w-2 h-2 rounded-full bg-primary" />
    <span className={`text-[15px] font-medium ${light ? 'text-primary-foreground' : 'text-secondary'}`}>
      {text}
    </span>
  </div>
);

export default SectionLabel;
