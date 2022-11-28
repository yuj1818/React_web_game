const React = require('react');
const { useState, useRef } = React;

const NumberBaseball = () => {
    const [word, setWord] = useState('으아악');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef();

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
        } else{
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = NumberBaseball;