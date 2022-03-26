import React,{useState} from 'react'

const Feedback = () => {

    const [reg, setReg] = useState({
        name:'',
        contact:'',
        description:'',
    });

    const [record, setRecord] = useState([]);

    const handleSubmit=(e) =>{
        e.preventDefault();

        const name= e.target.name;
        const value= e.target.value;
        console.log(name,value);

        setReg({...reg, [name]:value});
    }

    const handleForm = (e) =>{
        e.preventDefault();

        const newrecord= {...reg, id: new Date().getTime().toString()};

        setRecord([...record, newrecord]);

        setReg({name:'', contact:'', description:''});
    }

    return (
        <div>
            <div className="feedback-main">
                <form  className="form-main" onSubmit={handleForm}>
                    <div className="feedback">
                        <label htmlFor="name">Name</label> <br/>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={handleSubmit} value={reg.name} ></input>
                    </div>

                    <div  className="feedback">
                        <label htmlFor="contact">Email</label> <br/>
                        <input type="email" name="contact" autoComplete="off" id="contact" placeholder="Enter Email" onChange={handleSubmit} value={reg.contact}></input>
                    </div>

                    <div  className="feedback">
                        <label htmlFor="description">Your Experience</label> <br/>
                        <input type="text" autoComplete="off" name="description" id="description" placeholder="Your Feedback.." onChange={handleSubmit} value={reg.description}></input>
                    </div>
                    <button className="feedback-btn">Submit</button>
                </form>

                <div className="column">
                    <h1>Feedbacks</h1>
                    {
                        record.map((ele) =>{
                            return(
                                <div className="show-feedback">
                                    <span className="feedback-name">{ele.name}</span>
                                    <span className="feedback-contact">{ele.contact}</span>
                                    <p className="feedback-user">{ele.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Feedback
