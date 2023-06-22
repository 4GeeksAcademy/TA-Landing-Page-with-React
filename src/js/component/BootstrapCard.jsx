import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

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
