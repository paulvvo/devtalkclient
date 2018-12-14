import React, {Component} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup  = ({
	name,
	placeholder,
	value,
	label,
	error,
	info,
	type,
	onChange,
	disabled,
}) =>{
	// const {
	// 	name,
	// 	placeholder,
	// 	value,
	// 	label,
	// 	error,
	// 	info,
	// 	type,
	// 	onChange,
	// 	disabled,
	// } = props;

	return(
		{error? <div className="red">{error}</div>:null}
		<div className="form-group">
			<input
			type={type}
			className={classnames('form-control form-control-lg', {
				'is-invalid':error
			})}
			placeholder={placeholder}
			name={name}
			value={value}
			onChange={onChange}
			disabled={disabled}/>
		</div>
		{info?<small className="form-text text-muted"></small>:null}
	)
}


TextFieldGroup.propTypes = {
	name:PropTypes.string.isRequired,
	placeholder:PropTypes.string,
	value:PropTypes.string.isRequired,
	label:PropTypes.string,
	error:PropTypes.string,
	info:PropTypes.string,
	type:PropTypes.string.isRequired,
	onChange:PropTypes.func.isRequired,
	disabled:PropTypes.string,
}

TextFieldGroup.defaults = {
	type:'text'
}

export default TextFieldGroup;
