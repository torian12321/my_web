import React        from 'react';
import PropTypes    from 'prop-types';
import uniqid       from 'uniqid';
import InputNumber  from './Input_number';
import InputText    from './Input_text';

const Input = props => {
    const id = props.id || uniqid('input_');

    switch(props.type) {
        case 'num':
        case 'number':
        case 'numeric':
            return <InputNumber {...props} />
            break;
        case 'password':
        case 'text':
        default:
            return <InputText {...props} />
    }
};


Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password'])
};
Input.defaultProps = {
    type: 'text'
};

module.exports = Input;
