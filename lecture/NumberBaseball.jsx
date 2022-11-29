import React, {useState, useRef} from 'react';
import Try from "./Try";

const NumberBaseball = () => {

    const inputRef = useRef();

    //숫자 4개를 겹치치 않고 랜덤하게 뽑는 함수
    const getNumbers = () => {
        const candidate = [1,2,3,4,5,6,7,8,9];
        let array = [];
        for (let i = 0; i < 4; i++) {
            const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array = [...array, chosen]
        }
        return array;
    }

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers);   //lazy init
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => [...prevTries, { try: value, result: '홈런!' }]);
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            inputRef.current.focus();
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                inputRef.current.focus();
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼`}]);
                setValue('');
                inputRef.current.focus();
            }
        }
    };
    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((t, idx) => {
                    return (
                        <Try key={`${idx + 1}차 시도`} tryInfo={t} />
                    );
                })}
            </ul>
        </>
    )
};

export default NumberBaseball;