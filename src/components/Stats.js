function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === numPackedItems
          ? "you got everything! Read to go ✈"
          : `💼 You have ${numItems} items on your list , and you already packed
          ${numPackedItems}(${percentage}) %`}
      </em>
    </footer>
  );
}

export default Stats;
