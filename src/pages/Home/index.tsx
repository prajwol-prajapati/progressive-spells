import { LoadingOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Card, TitleContainer } from "../../components";
import { useListOfSpells } from "../../hooks/useSpells";
import { ISpell } from "../../interfaces/spell";

const HomePage = () => {
  const { data, isLoading } = useListOfSpells();

  return (
    <TitleContainer title="Spells">
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="grid">
          {data?.results?.map((spell: ISpell) => (
            <Card name={spell.name} key={spell.index} index={spell.index} />
          ))}
        </div>
      )}
      <FloatButton.BackTop />
    </TitleContainer>
  );
};

export { HomePage };
