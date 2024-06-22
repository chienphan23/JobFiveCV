import { ContentDescJob } from "./ContentDescJob";

export const IndexOfJob = ({ title, arrayContent }) => {
  return (
    <>
      <div className="row">
        <h6 className="col-lg-12 font-weight-bold" style={{ margin: "18px 0" }}>
          {title}
        </h6>
        {arrayContent &&
          arrayContent?.map((i, index) => (
            <ContentDescJob key={index} content={i.description} />
          ))}
      </div>
    </>
  );
};
