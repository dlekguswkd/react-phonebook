//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트

//import css


const WriteForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/



    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-등록폼</h2>

            <p>아래의 항목을 입력한 후 등록버튼을 클릭해 주세요</p>
        
            <label htmlFor="txt-name">이름(name):</label> 
            <input id="txt-name" type="text" name="" value="" placeholder="이름" />
            <br />
        
        
            <label htmlFor="txt-hp">핸드폰(hp):</label> 
            <input id="txt-hp" type="text" name="" value="" placeholder="핸드폰" />
            <br />
        
        
            <label htmlFor="txt-company">회사(company):</label> 
            <input id="txt-company" type="text" name="" value="" placeholder="회사" />
            <br />

            <label htmlFor="txt-hidden">숨김</label> 
            <input id="txt-hidden" type="text" name="" value="insert" /> 
            <br />
            <button type="submit">등록(전송)</button>


            <br /><br /><br />
            <Link to="http://localhost:3000/list" rel="noreferrer noopener">
                리스트로 가기
            </Link>

        </>
    );
}

export default WriteForm;