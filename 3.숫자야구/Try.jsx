import React, {memo} from "react";

//memo 사용하여 불필요한 리렌더링 방지
const Try = memo(({tryInfo}) => {
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});
Try.displayName = 'Try';

export default Try;