import React from "react";

const descriptions = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Lacus vel facilisis volutpat est velit. Vivamus at augue eget arcu dictum.",
"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu. Pellentesque eu tincidunt tortor aliquam. Rhoncus dolor purus non enim praesent elementum facilisis.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est. Consectetur adipiscing elit duis tristique sollicitudin. Vitae semper quis lectus nulla at."
];

/**
 * change the content of the map function
 **/
const BootstrapCard = (props) => {

const descriptionHtml= descriptions.map((description, i) => {
	return( <div className="card" style="width: 18rem;">
	<img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
		<p className="card-text">{props.description}</p>
		</div>
		<div className="card-footer text-body-secondary">
			<a href="{props.buttonUrl}" className="btn btn-primary">{props.buttonLabel}</a>
		</div>
</div>
	 <li key={i}>{singleAnimal.label}</li>;)
});


const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
    <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer text-body-secondary">
                <a href="{props.buttonUrl}" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
    </div>
		
	)
};
BootstrapCard.propTypes = {
	// 2) add here the new properties into the proptypes object
	imageUrl: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title="Card Title"
		imageUrl="..."
		description=""
		buttonUrl="..."
		buttonLabel="Find out More"
	/>,
	document.querySelector("#myDiv")
);
export default BootstrapCard;

