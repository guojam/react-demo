import React, { useEffect, useState } from 'react';
import Pager from '../../components/layout/pager';

function InputNumber(props) {
    const isControlled = 'value' in props;
    const [innerValue, setInnerValue] = useState('');

    useEffect(() => {
        setInnerValue(props.defaultValue);
    });

    return (
        <input
            type="text"
            value={isControlled ? props.value : innerValue}
            onChange={e => {
                if (!isControlled) {
                    setInnerValue(e.target.value);
                }
                props.onChange(e);
            }}
        />
    );
}

function TestCtrlUnctrl() {
    const [value1, setValue1] = useState('aaa');
    const [value2, setValue2] = useState('bbb');
    return (
        <Pager title="受控/非受控组件">
            <p>
                <InputNumber
                    value={value1}
                    onChange={e => {
                        setValue1(e.target.value);
                    }}
                />
                <br />
                受控： {value1}
            </p>
            <p>
                <InputNumber
                    defaultValue={value2}
                    onChange={e => {
                        setValue2(e.target.value);
                    }}
                />
                <br />
                非受控： {value2}
            </p>
        </Pager>
    );
}
export default TestCtrlUnctrl;
