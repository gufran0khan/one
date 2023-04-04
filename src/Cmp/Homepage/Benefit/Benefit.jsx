import "./Benefit.css";
import {
    Container,
    Row,Col

} from "react-bootstrap";
const data=
 [
    {
        icon:"fa fa-check",
        title:"Interior Switch",
        desc:"There are many variation  of passages of lorem ipsum , but the majority have suffered"
    },
    {
        icon:"fa fa-edit",
        title:"Interior Switch",
        desc:"There are many variation  of passages of lorem ipsum , but the majority have suffered"
    },
    {
        icon:"fa fa-share",
        title:"Interior Switch",
        desc:"There are many variation  of passages of lorem ipsum , but the majority have suffered"
    }
]
const List = (Listdata)=>{
    const design = (
        <>
        <div className="d-flex mb-4">
    <div>
        <div className="icon-box d-flex  justify-content-center align-items-center">
        <i className= {Listdata.alldata.icon} ></i>
        </div>

        </div>
        <div className="px-3">
        <h5>{Listdata.alldata.title}</h5>
        <p>{Listdata.alldata.desc}</p>

        </div>
        </div>
        </>
     );
     return design;
    
}
const Benefit =()=>{
    const design =(
        <>
           <Container>
            <Row>
                <Col md="5" className="px-4 d-flex flex-column justify-content-center">
                {
                data.map((item)=>{
                 
                 return <List alldata={item}/>
                })
                }
                </Col>
                <Col md="7" className="px-4 ">
                <img src="main.jpg" width="80%" className="rounded-circle man-pic"/>

                </Col>
            </Row>
           </Container>
        </>

    
    );
    return design ;
}
export default Benefit;