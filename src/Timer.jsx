import React, { useEffect } from 'react';

const Timer = () => {

    useEffect(() => {
        let ct = 0;
        const timer = setInterval(() => {
            console.log('타이머가 돌아 가는 중입니다.');
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료 되었습니다.');
        };
    }, []);


    return (
        <div>
            <h3>타이머를 시작합니다.</h3>
            <p>콘솔로 할께요. 콘솔을 보세요</p>
        </div>
    );
};

export default Timer;