import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup  = ({
	name,
	placeholder,
	value,
	error,
	info,
	onChange,
}) =>{
	return(
		<div className="form-group">
			{error? <div className="red">{error}</div>:null}
			<input
			className={classnames('form-control form-control-lg', {
				'is-invalid':error
			})}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}/>
			{info?<small className="form-text text-muted">{info}</small>:null}

		</div>
	)
}


TextAreaFieldGroup.propTypes = {
	name:PropTypes.string.isRequired,
	placeholder:PropTypes.string,
	value:PropTypes.string.isRequired,
	error:PropTypes.string,
	info:PropTypes.string,
	onChange:PropTypes.func.isRequired,
}

export default TextAreaFieldGroup;
