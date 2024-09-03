import PropTypes from 'prop-types';





function CoreConcept (props){

    return(
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
    
    }
    
    
    // class 02 :== props validation
    CoreConcept.propTypes = {
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    
    }
    
    
    
    // class 03 :=== alternate
    
    function CoreConcept2({title, description,image}){
      return (
        <li>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      )
    }
    CoreConcept2.propTypes = {
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    
    }


    export {CoreConcept ,CoreConcept2}