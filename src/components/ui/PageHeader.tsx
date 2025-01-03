type Props = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-black">{title}</h1>
      <h4 className="text-sm">{subtitle}</h4>
    </div>
  );
};

export default PageHeader;
