import { useRef, useState } from "react"


const Contact = () => {

    //refs and states
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className='c-space my-20' id="contact">

            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />

                <div className='contact-container'>

                    <h3 className='head-text'>
                       Let's talk
                    </h3>

                    <p className='text-lg text-white-600 mt-3'>
                        If you would like to reach me to chat about design, please fill out the form below. I can't wait to hear your feedback from this site design.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Full name</span>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Some name"
                            />
                        </label>
                        
                        <label htmlFor="email" className="space-y-3">
                            <span className="field-label">Email</span>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="some_email@gmail.com"
                            />
                        </label>
                        
                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea 
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                        
                    </form>

                </div>
            </div>
            
        </section>
    )
}

export default Contact