type Props = {
  title: string;
  subtitle: string;
};

const FormHeader = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-table-header">{title}</h1>
      <h4 className="text-brand-text2">{subtitle}</h4>
    </div>
  );
};

export default FormHeader;
