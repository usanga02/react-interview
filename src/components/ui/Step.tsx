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
        className={`px-3 py-1 h-fit rounded-full border font-bold ${
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
        <h4 className={`font-bold  ${activeStep >= id && `text-brand-bold`}`}>
          {title}
        </h4>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default Step;
