function ListControls({ titleAscOrder, setTitleAscOrder }) {
  const handleTitleSortOrderChange = () => {
    setTitleAscOrder(!titleAscOrder);
  };

  return (
    <button onClick={handleTitleSortOrderChange}>
      Sort by title ({titleAscOrder ? 'Ascending' : 'Descending'})
    </button>
  );
}

export default ListControls;
