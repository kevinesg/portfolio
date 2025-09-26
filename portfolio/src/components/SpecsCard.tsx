interface Spec {
  component: string;
  value: string | string[];
}

interface SpecsCardProps {
  specs: Spec[];
  linkUrl?: string;
}

const SpecsCard = ({ specs, linkUrl }: SpecsCardProps) => {
  const renderValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <>
          <span className="json-bracket">[</span>
          <div className="pl-8">
            {value.map((v, i) => (
              <div key={i}>
                <span className="json-value">"{v}"</span>
                {i < value.length - 1 && ","}
              </div>
            ))}
          </div>
          <span className="json-bracket">]</span>
        </>
      );
    }
    return <span className="json-value">"{value}"</span>;
  };

  return (
    <div className="card whitespace-pre-wrap my-4">
      <span className="json-braces">{`{`}</span>
      <div className="pl-4">
        {specs.map((spec, index) => (
          <div key={spec.component}>
            <span className="json-key">"{spec.component}"</span>:{" "}
            {renderValue(spec.value)}
            {index < specs.length - 1 || linkUrl ? "," : ""}
          </div>
        ))}
        {linkUrl && (
          <div className="flex">
            <span className="json-key mr-2">"partsList"</span>:{" "}
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="json-value hover:underline truncate"
              title={linkUrl}
            >
              "{linkUrl}"
            </a>
          </div>
        )}
      </div>
      <span className="json-braces">{`}`}</span>
    </div>
  );
};

export default SpecsCard;
