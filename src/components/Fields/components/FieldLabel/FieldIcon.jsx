import React from 'react';

export const FieldIcon = ({ meta, icon }) => (
	<div className="form-control-icon">
		<i
	  		className={
				`icon ${icon} ${meta.error && meta.touched ? 'error' : null}`
	  		}
		/>
	</div>
);
