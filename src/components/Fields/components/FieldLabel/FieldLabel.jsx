import React from 'react';

export const FieldLabel = ({ label, field }) => (
  <div>
    {label}
    {field === 'unique required' && (
      <span>
        <span className="unique">
          (must be unique)
        </span>
        <span className="required">
          *
        </span>
      </span>
    )}
    {field === 'required' && (<span className="required">*</span>)}
    {field === 'optional' && (<span className="optional">(optional)</span>)}
  </div>
);
