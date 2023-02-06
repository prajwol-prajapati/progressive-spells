import { LoadingOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { CrossIcon } from "../../assets";
import { TitleContainer } from "../../components";
import { useParams, Link } from "react-router-dom";
import { useSpellDetails } from "../../hooks/useSpellDetails";

interface IDesc {
  name: string;
  description: string;
}

const Details = () => {
  const params = useParams();

  const { data, isLoading } = useSpellDetails(params);

  const Description = ({ name, description }: IDesc) => {
    return (
      <>
        <h4>{name}</h4>
        <p className="description">{description || "-"}</p>
        <Divider />
      </>
    );
  };

  return (
    <TitleContainer title={data?.name}>
      <Link to='/'>
        <CrossIcon className="detail-close" />
      </Link>
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="details">
          <Description name="Description" description={data?.desc} />
          <Description name="Range" description={data?.range} />
          {data?.material && (
            <Description name="Material" description={data?.material} />
          )}
          <Description name="Duration" description={data?.duration} />
        </div>
      )}
    </TitleContainer>
  );
};

export default Details;
