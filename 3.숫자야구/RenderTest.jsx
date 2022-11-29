import React, {PureComponent} from "react";

//PureComponent도 억울한 자식 리렌더링 막는 역할, but 객체 배열 state 바뀌었는지 판단하기 어려움 => 스프레드(...)연산자 사용해야 바뀐걸 알아차릴 수 있음
class Test extends PureComponent {
    state = {
        counter: 0,
    };
    // 억울한 자식 리렌더링 방지
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        this.setState({});
    }

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test;