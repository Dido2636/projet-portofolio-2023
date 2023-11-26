



function Grid(props) {
    return (
        <>


        <div className="card">
          <img className="image-site" src={props.imageUrl}  />
          <h2 className="title">{props.title}</h2>
          <p className="framework">{props.framework}</p>
        </div>



        </>
        


    )
}

export default Grid;

