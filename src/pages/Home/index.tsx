import { Link } from 'react-router-dom';
import { LoadingOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { FavoriteCard, TitleContainer } from "../../components";
import { useListOfSpells } from "../../hooks/useSpells";
import { ISpell } from "../../interfaces/spell";

const HomePage = () => {
  const { data, isLoading } = useListOfSpells();

  return (
    <TitleContainer title="Favorite Spells">
      <Link to='spells'>
        <div className='add-favorite-spell'>Add Favorite Spell</div>
      </Link>
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="grid">
          {data?.results?.map((spell: ISpell) => (
            <FavoriteCard name={spell.name} key={spell.index} index={spell.index} />
          ))}
        </div>
      )}
      <FloatButton.BackTop />
    </TitleContainer>
  );
};

export { HomePage };
