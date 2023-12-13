function Grid({ imageUrl, title, framework }) {
  return (
    <>
      <div className="card">
        <img className="image-site" src={imageUrl} />
        <h2 className="title">{title}</h2>
        <p className="framework">{framework}</p>
      </div>
    </>
  );
}

export default Grid;
