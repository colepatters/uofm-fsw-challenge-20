import "./assets/portfolio.css"

function Portfolio() {
    return (
    <div className="p-4">
        <h1 className="pb-4">Portfolio</h1>
        
        <div className="d-flex justify-content-center">
            <div id="project-container" className="d-flex flex-wrap justify-content-center align-items-center">
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
                <img src="https://placehold.co/600x400" className="img-fluid rounded" alt="" />
            </div>
        </div>
    </div>
    )
}

export default Portfolio