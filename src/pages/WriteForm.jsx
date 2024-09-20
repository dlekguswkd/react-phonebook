//import 라이브러리
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


//import 컴포넌트

//import css


const WriteForm = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [company, setCompany] = useState("");

    const navigate = useNavigate();

    /*---일반 메소드 --------------------------------------------*/



    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 이름
    const handleName = (event)=> {
        // console.log("이름입력");
        setName(event.target.value);
        // console.log(event.target.value);
    }

    // 핸드폰
    const handleHp = (event)=> {
        // console.log("번호입력");
        setHp(event.target.value);
        // console.log(event.target.value);
    }

    // 회사번호
    const handleCompany = (event)=> {
        // console.log("회사번호입력");
        setCompany(event.target.value);
        // console.log(event.target.value);
    }

    // 저장 (등록할때)
    const handleAdd = (e)=> {
        // console.log("전송");
        e.preventDefault();     // 폼에 액션으로 가는걸 막는것

        // 데이터 모으고 묶기
        const personVo = {
            name: name,
            hp: hp,
            company: company
        }
        console.log(personVo);

        // 서버로 데이터 전송
        axios({
            method: 'post',         // 저장 (등록)
            url: 'http://localhost:9000/api/persons',

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put 보낼때

            data: personVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data === 1) {
                // 리다이렉트
                navigate("/list");
            
            }else {
                alert("등록실패");
            }

        }).catch(error => {
            console.log(error);
        });

    }


    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-등록폼</h2>

            <p>아래의 항목을 입력한 후 등록버튼을 클릭해 주세요</p>
        
            <form action="" method="" onSubmit={handleAdd}>
                <div>
                    <label htmlFor="txt-name">이름(name):</label> 
                    <input id="txt-name" type="text" name="" value={name} placeholder="이름" onChange={handleName}/>
                </div>
            
                <div>
                    <label htmlFor="txt-hp">핸드폰(hp):</label> 
                    <input id="txt-hp" type="text" name="" value={hp} placeholder="핸드폰" onChange={handleHp} />
                </div>
            
                <div>
                    <label htmlFor="txt-company">회사(company):</label> 
                    <input id="txt-company" type="text" name="" value={company} placeholder="회사" onChange={handleCompany} />
                </div>

                <br />

                {/* <div>
                    <label htmlFor="txt-hidden">숨김</label> 
                    <input id="txt-hidden" type="text" name="" value="insert" /> 
                </div> */}

                <button type="submit">등록(전송)</button>
            </form>


            <br /><br /><br />
            <Link to="/list" rel="noreferrer noopener">
                리스트로 가기
            </Link>

        </>
    );
}

export default WriteForm;