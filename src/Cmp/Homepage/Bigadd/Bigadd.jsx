import "./Bigadd.css"
const Bigadd =()=>{
    const design = (
        <>
             <div className="video-box">
            <video width="100%" autoPlay muted loop>
                <source src="video.mp4" ></source>
            </video>
            <div className="overlay d-flex justify-content-center align-items-center">
            <div>
                <h2 className="text-light">Introducing</h2>
                <h2 className="text-white large-title">React-tutorial</h2>
                <h2 className="text-light">By Wap Institute</h2>
                <button className="btn btn-primary py-2 px--4 mt-4">Learn More</button>
            </div>

            </div>

            </div>
            
            </>
    );
    return design;
}
export default Bigadd;