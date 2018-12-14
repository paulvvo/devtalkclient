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



export default TextFieldGroup;
