import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        font-size: 36px;
        margin: 0;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasksLeft {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const TodoHead = () => {
    return (
        <TodoHeadBlock>
            <h1>todolist</h1>
            <div className="day">요일</div>
            <div className="tasksLeft">할 일 개 남음</div>
        </TodoHeadBlock>
    );
};

export default TodoHead;
