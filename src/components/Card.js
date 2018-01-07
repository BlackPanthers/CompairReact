import React from 'react';
import PropTypes from 'prop-types'


const Card = (props) => {

    return (

        <div className="col s12 m3 l3">
            <div className="card item-card amz">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator item-image" src={props.image} />
                </div>
                <div className="card-content">
                    <div className="card-title border">
                        <span className="activator item-title">{props.name}</span>
                    </div>
                    <div className="card-price">
                        <p>Price: <em>${props.salePrice}</em></p>
                    </div>
                    <div className="card-link">
                        <p><a href="#">Go to Amazon</a></p>
                    </div>
                    <div className="retail-logo">
                        <img src="/img/amazonlogo.png" />
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">More Info<i className="material-icons right">close</i></span>
                    <p>{props.shortDescription}</p>
                </div>
            </div>
        </div>

    )

}

Card.propTypes = {

    name: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,

}

export default Card;