
export default function IconLink(props) {

    return (
        <>
            <a href={props.link} target="_blank" style={{width: "50px", padding: "8px"}}>
                <img src={props.icon} alt={props.alt} />
            </a>
        </>
    )

}