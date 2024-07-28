
function Resume() {
    return (
        <div className="p-4">
            <h1>Resume</h1>

            {/* TODO: create download link to resume */}
            <a href="" target="_blank">Download Resume</a>

            <section className="pt-4">
                <h3>Front-end Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Third-Party Web APIs</li>
                    <li>Server-Side APIs</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                    <li>Progressive Web Applications (PWAs)</li>
                    <li>React</li>
                </ul>
            </section>

            <section>
                <h3>Back-end Skills</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL (mySQL, PostgreSQL)</li>
                    <li>Object Relational Mapping (ORM)</li>
                    <li>NoSQL (MongoDB)</li>
                    <li>Object Document Mapping (ODM)</li>
                </ul>
            </section>

            <section>
                <h3>Web Technologies</h3>
                <ul>
                    <li>HTTP/HTTPS</li>
                    <li>Server-Side Rendering (SSR)</li>
                    <li>Cookies</li>
                    <li>Session-Based Authentication</li>
                </ul>
            </section>
            
            <section>
                <h3>Methodologies & Architecture</h3>
                <ul>
                    <li>Object Oriented Programming (OOP)</li>
                    <li>Model-View-Controller Architecture (MVC)</li>
                    <li>Business Process Modeling (BPMN 2.0)</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                    <li>Test-Driven Development</li>
                    <li>Solution/Enterprise Architecture (Archi, Archimate)</li>
                    <li>MERN Stack (MongoDB, Express, React, Node)</li>
                </ul>
            </section>
        </div>
    )
}

export default Resume