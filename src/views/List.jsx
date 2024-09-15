//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트

//import css


const List = () => {

/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

/*---일반 메소드 --------------------------------------------*/



/*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (
        <>
            <h1>전화번호부</h1>
            <h2>전화번호-리스트</h2>
            <p>등록된 전화번호 리스트 입니다.</p>
            <br />
            <table border="1">
                <tbody>
                    <tr>
                        <th>이름(name)</th>
                        <td>정우성</td>
                    </tr>
                    <tr>
                        <th>핸드폰(hp)</th>
                        <td>010-1111-1111</td>
                    </tr>
                    <tr>
                        <th>회사(company)</th>
                        <td>02-1111-1111</td>
                    </tr>
                    <tr>
                        <th>
                            <Link to="http://localhost:3000/editform" rel="noreferrer noopener">
                                [수정폼으로 이동]
                            </Link>
                        </th>
                        <td>
                            <Link to="" rel="noreferrer noopener">
                                [삭제]
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Link to="http://localhost:3000/writeform" rel="noreferrer noopener">
                등록폼으로 이동
            </Link>
                
            

        </>
    );
}

export default List;