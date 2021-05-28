import React from 'react';
import Card_CRAW from './Card_CRAW';
import web from './logo.svg';
import Sdata_CRAW from "./Sdata_CRAW";

const Service_CRAW = () => {
    return (
        <>
            <h1>Our Service</h1>
             <div className="my-5">
             </div>
             <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">

                                {Sdata_CRAW.map((val, ind) => {
                                    return <Card_CRAW key={ind} imgSrc={val.imgSrc} title={val.title}/>
                                })}
{/* <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>                                     */}
                                </div>
                            </div> 
                        </div>             
                    </div>
            </div> 






            {/* <h1 className="tab-center">Our Service</h1>
            <Card_CRAW imgsrc="web" />
            <Card_CRAW imgsrc="web"/> */}
        </>
    );
}

export default Service_CRAW;