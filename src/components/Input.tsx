
// outsource dependencies
import { FormGroup } from 'react-bootstrap';
import React, { PureComponent } from 'react';

class Input extends PureComponent<any, any> {

    handleChange = (event: any) => {
        const { input, filter = (e:any)=>e } = this.props;
        input.onChange(filter(event));
    };

    className = (statusClassName: any) => {
        const { addClassName=null, className='form-control' } = this.props;
        const resClass = addClassName ? `${className} ${addClassName}`: className;
        return `${resClass} ${statusClassName}`;
    };

    render () {
        const {input, meta, label = null, skipTouch = false, labelPrefix = '', ...attr} = this.props;
        let message = '', statusClassName = '';
        if (skipTouch || meta.touched) {
            message = meta.error;
            statusClassName = meta.valid ? 'is-valid' : 'is-invalid';
        }

        return (<FormGroup>
            { !label ? '' : (<label htmlFor={input.name + labelPrefix}> { label } </label>) }
            <input
                { ...input }
                { ...attr }
                id={input.name + labelPrefix}
                onChange={this.handleChange}
                className={this.className(statusClassName)}
            />
            <label htmlFor={input.name} className="invalid-feedback"> { message } </label>
        </FormGroup>);
    }
}

export default Input;