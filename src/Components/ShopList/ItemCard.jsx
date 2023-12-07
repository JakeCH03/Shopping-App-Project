import "./ItemCard.css"

const ItemCard = ({item}) => {
  return (
    <section className="item-wrapper">
      <h3 className="item-name">{item.item_name}</h3>
      <img className="image" src={item.img_url} />
      <p className="description">{item.description}</p>
    </section>
  );
};

export default ItemCard;
