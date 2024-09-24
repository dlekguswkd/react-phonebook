//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';
// import React, {useState} from 'react';	화면 상태관리	
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css


const ItemPerson = (props) => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/


	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
	// list3에 내가정한이름 = 불러온정보
	const {person, delPerson} = props;
	// console.log(person);
	// console.log(delPerson);


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <table border="1">
				<tbody>
					<tr>
						<th>이름(name)</th>
						<td>{person.name}</td>
					</tr>
					<tr>
						<th>핸드폰(hp)</th>
						<td>{person.hp}</td>
					</tr>
					<tr>
						<th>회사(company)</th>
						<td>{person.company}</td>
					</tr>
					<tr>
						<th>
							<Link to={`/editform/${person.personId}`} rel="noreferrer noopener">
								[수정폼으로 이동]
							</Link>
						</th>								{/* 동작예약걸어두기 */}
						<td><button type="button" onClick={()=>{return delPerson(person.personId)}}	>[삭제]</button></td>
					</tr>
				</tbody>  
			</table>
			<br />
        </>
    );
}

export default ItemPerson;