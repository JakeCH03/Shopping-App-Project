const ItemCard = ({item}) => {
  return (
    <section>
      <h3>{item.item_name}</h3>
      <img src={item.img_url} />
      <p>{item.description}</p>
    </section>
  );
};

export default ItemCard;
