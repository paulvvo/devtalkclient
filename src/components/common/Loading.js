import React from "react";
import loadingGif from "./loading.gif";

const Loading = () =>{
	return (
		<div>
			<img
			src={loadingGif}
			style={{
					width:"100px",
					height:"100px",
					display:"block",
					margin:"auto"
			}}
			alt=""/>
		</div>
	)
}

export default Loading;
