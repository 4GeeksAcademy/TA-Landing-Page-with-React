import React from "react";


const BootstrapCard = () => {
	const cardInfo = [
	  {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident "
	  },
	  {
		text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Lacus vel facilisis volutpat est velit. Vivamus at augue eget arcu dictum."
	  },
	  {
		
		text: "3 Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu. Pellentesque eu tincidunt tortor aliquam. Rhoncus dolor purus non enim praesent elementum facilisis.",
	  },
	  {
		
		text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est. Consectetur adipiscing elit duis tristique sollicitudin. Vitae semper quis lectus nulla at.",
	  } 
	];
/**
 * change the content of the map function
 **/


	const renderCard = (card, index) => { return(
   
        <div key={index} className="card d-flex m-3">
        <img className="card-img-top" src='http://via.placeholder.com/500x325.jpg'alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">{card.text}</p>
        </div>
        <div className="card-footer">
        <a href="" className="btn btn-primary">
                Find out more!
            </a>
        </div>
    </div>
)};

return <div className="d-flex col">{cardInfo.map(renderCard)}</div>;
}


export default BootstrapCard;

