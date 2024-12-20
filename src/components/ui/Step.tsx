type Props = {
  id: number;
  title: string;
  subtitle: string;
  activeStep: number;
};

const Step = ({ id, title, subtitle, activeStep }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`px-3 pt-1 pb-1.5 h-fit rounded-full border font-bold ${
          activeStep == id
            ? `bg-brand-blue text-white`
            : activeStep > id
            ? `bg-green-200 text-green-500`
            : ``
        }`}
      >
        {id + 1}
      </span>
      <div>
        <h4 className="font-bold text-base text-black">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default Step;
