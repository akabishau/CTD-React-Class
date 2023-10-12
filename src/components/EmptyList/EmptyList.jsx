import './EmptyList.css';

function EmptyList() {
  return (
    <p className="empty-list">
      {"You don't have any TODOs now 🤔"}
      <br />
      {"Let's start by creating the first one! 🚀"}
    </p>
  );
}

export default EmptyList;
