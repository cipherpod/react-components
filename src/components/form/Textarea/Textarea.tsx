/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { SVG } from '../../utils';

import './Textarea.scss';
import { ITextarea } from '../../../interfaces';

import iconSuccess from '../../../assets/svg/success.svg';
import iconInfo from '../../../assets/svg/info.svg';

const Textarea = (props: ITextarea) => {
    const { label, className, value, changed, invalid, shouldValidate, placeholder, children,
        touched, errors, disabled, light, info, ...otherProps } = props;

    const classes: any = [
        'AMB-Textarea',
        `${light && 'light' || ''}`,
        `${disabled && 'disabled' || ''}`,
        `${touched && !invalid && 'valid' || ''}`,
        `${className || ''}`.trim(),
    ].filter(Boolean);

    if (invalid && shouldValidate && touched) {
        classes.push('error');
    }

    const _value = children && children.toString() || value;

    return (
        <label className={classes.join(' ').trim()} {...otherProps}>
            <div className='title'>
                <span>{label}</span>
                <div className='meta'>
                    {touched && !invalid && <SVG className='SVG' src={iconSuccess} />}
                    {info && (
                        <div className='info'>
                            <SVG className='SVG' src={iconInfo} />
                            <span className='message' dangerouslySetInnerHTML={{ __html: info }}></span>
                        </div>
                    )}
                </div>
            </div>
            <div className='textarea'>
                <textarea
                    value={_value}
                    onChange={changed}
                    spellCheck={false}
                    placeholder={placeholder}
                    disabled={disabled}
                ></textarea>
                <div className='border'></div>
            </div>
            {invalid && shouldValidate && touched && <p className='message'>{errors}</p>}
        </label>
    );
};

export default Textarea;
