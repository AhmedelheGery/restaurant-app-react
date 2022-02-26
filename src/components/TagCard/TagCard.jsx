import "./TagCard.css";

const TagCard = ({ onSelectTag, tag }) => {
  return (
    <div className="tag-card" onClick={() => onSelectTag(tag)}>
      <div className="img-wrapper">
        <img src={tag.image} alt={tag.image.name} />
      </div>
      <p className="title">{tag.name}</p>
    </div>
  );
};

export default TagCard;
