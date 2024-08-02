import "../assets/contact.css"

export default function ContactPage() {
    return (
        <div className="">
            <h1>Contact</h1>
            <div id="contact-form-container" className="d-flex justify-content-center w-100">
                <form className="w-100" action="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea name="message" className="form-control" rows="10" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}