import React, {useState} from 'react';

const Contact_CRAW = () => {
    const [data, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        msg: "",
    });

    const fromSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} ${data.email} ${data.phone}`)
    }

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
<form onSubmit={fromSubmit}>
    <div className="col-md-6 col-10 mx-auto">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Full Name"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Email Address"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone no.</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Mobile No"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>          
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div> 
    </div>             
</form>
                   
                </div>
            </div>
        </>
    );
}

export default Contact_CRAW;