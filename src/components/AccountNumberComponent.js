import {useState} from "react";
import React from 'react';


const AccountNumberComponent = () => {
    const [openBrideDiv, setOpenBrideDiv] = useState(false);
    const [openGroomDiv, setOpenGroomDiv] = useState(false);

    const onBrideClick = () => {
        setOpenBrideDiv(!openBrideDiv);
    };

    const onGroomClick = () => {
        setOpenGroomDiv(!openGroomDiv);
    };

    return (
        <div>
            <div onClick={onGroomClick}>신랑측 계좌번호 보기</div>
            {openGroomDiv &&
                <div className="accountDiv">
                    <div>
                        <span className="accountName">신랑 김세중</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                    <div>
                        <span className="accountName">신랑 김세중</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                    <div>
                        <span className="accountName">신랑 김세중</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                </div>

            }
            <div onClick={onBrideClick}>신부측 계좌번호 보기</div>
            {openBrideDiv &&
                <div className="accountDiv">
                    <div>
                        <span className="accountName">신부 최유정</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                    <div>
                        <span className="accountName">신부 최유정</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                    <div>
                        <span className="accountName">신부 최유정</span>
                        <span className="accountNumber">우리은행 1002-756-471511</span>
                    </div>
                </div>}
        </div>
    );
}

export default AccountNumberComponent;