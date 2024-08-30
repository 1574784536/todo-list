import React from "react";

function MyHeader(props) {
    const { openInput } = props;
    return (
        <div>
            <h1>事件代办</h1>
            <span onClick={openInput}>&#43;</span>
        </div>
    )
}

export default MyHeader;
