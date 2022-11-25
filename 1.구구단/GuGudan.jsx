const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const input = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(value + ' 정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            input.current.focus()
        } else {
            setResult(value + ' 땡');
            setValue('');
            input.current.focus();
        }
    };

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div>
                <div>{first} 곱하기 {second}는?</div>
            </div>
            <form onSubmit={onSubmit}>
                <input ref={input} type="number" onChange={onChange} value={value} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </div>
    )
}

module.exports = GuGuDan;