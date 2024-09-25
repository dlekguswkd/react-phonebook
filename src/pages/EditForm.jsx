//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트

//import css


const EditForm = () => {

    /*---일반 변수 --------------------------------------------*/

    /*---라우터 관련-------------------------------*/
    const { no } = useParams();   // URL 경로에서 personId파라미터를 가져옴 123 우리가 정한이름 no (주소에)
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [company, setCompany] = useState("");

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 로딩 -> 마운트 되었을때
    useEffect(()=>{
        console.log("마운트됐을때");
        console.log(no);

        // 서버로 no값 보내서 no데이터 받기 그리고 화면에 출력하기 
        // 서버로 데이터 전송
        axios({
            method: 'get', // put, post, delete  수정폼-> 데이터 가져오기
            url: 'http://localhost:9000/api/persons/'+no,

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data.result); //수신데이타  성공실패
            // console.log(response.data.apiData.name); //수신데이타   수정할사람의 이름

            if(response.data.result === 'success') {
                // 성공로직
                // useSate 사용해서 값 대입
                setName(response.data.apiData.name);
                setHp(response.data.apiData.hp);
                setCompany(response.data.apiData.company);

            }else {
                // 실패로직 -> 리스트로 보내기
                navigate("/list");

            }

        }).catch(error => {
            console.log(error);
        }); 

    }, []);       // }, [no]); -> no 값 바뀌면 다시 실행해 하는 의미 우리는 그럴일 없음 그냥 문법적으로 써주는거임 경고가 떠서

    // 값 변하게 하기
    // 이름값이 변경되었을때
    const handleName = (e)=> {
        setName(e.target.value);
    }

    // 번호값이 변경되었을때
    const handleHp = (e)=> {
        setHp(e.target.value);
    }

    // 회사값이 변경되었을때
    const handleCompany = (e)=> {
        setCompany(e.target.value);
    }

    // 수정 버튼을 클릭했을때
    const handleUpdate = (e)=> {
        e.preventDefault();     // 폼에 액션으로 가는걸 막는것
        // console.log('수정버튼 클릭');

        // 데이터 수집 모아서 묶기
        const personVo = {
            name: name,
            hp: hp,
            company: company
        }
        console.log(personVo);

        // 서버로 데이터 전송
        axios({
            method: 'put',   // put, post, delete     -> 수정은 put
            url: 'http://localhost:9000/api/persons/'+no,

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put
            data: personVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data.result);

            if(response.data.result === 'success') {
                // 성공로직
                navigate("/");

            }else {
                // 실패로직
                alert(response.data.message);
            }

        }).catch(error => {
            console.log(error);
        });

    }


    return (
        <>
            <h1>전화번호부</h1>
            <h2>전화번호-수정폼</h2>
            <p>수정할 항목을 입력한 후 수정버튼을 클릭해 주세요</p>

            <form action="" method="" onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="txt-name">이름(name): </label>
                    <input id="txt-name" type="text" name="" value={name} placeholder="이름" onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="txt-hp">핸드폰(hp): </label>
                    <input id="txt-hp" type="text" name="" value={hp} placeholder="핸드폰" onChange={handleHp} />
                </div>
                <div>
                    <label htmlFor="txt-company">회사(company): </label>
                    <input id="txt-company" type="text" name="" value={company} placeholder="회사" onChange={handleCompany} />
                </div>

                {/* <input id="" type="text" name="" value="update" placeholder="" />
                <input id="" type="text" name="" value="" placeholder="" /> */}
                <br />
                <button type="submit" >수정(전송)</button>
            </form>

            <br /> <br />
            <Link to="/" rel="noreferrer noopener">리스트로 가기</Link>

        </>
    );
}

export default EditForm;