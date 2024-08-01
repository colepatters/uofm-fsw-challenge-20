
export default function Project(props) {

    return (
        <>  
            <a href={"/portfolio/" + props.project.urlName} className="project-card">
                <img src={props.project.thumbnail} className="img-fluid rounded" alt="" />
            </a>
        </>
    )
}