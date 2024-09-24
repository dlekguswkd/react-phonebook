//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';      자기페이지 리다이렉트 안됨
import axios from 'axios';

//import 컴포넌트
import ItemPerson from './ItemPerson';

//import css


const List3 = () => {
    
    /*
    // 리다이렉트 안됨 (같은페이지의 리다이렉트는 안됨)
    const navigate = useNavigate();
    */

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [personList, setPersonList] = useState([]);


    /*---일반 메소드 --------------------------------------------*/
    const getPersonList = ()=> {

        axios({
            method: 'get',          // put, post, delete
            url: 'http://localhost:9000/api/persons',       // 보낼때
        
            responseType: 'json' //수신타입  응답할때
        }).then(response => {
            // console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            // personList = response.data;
            setPersonList(response.data.apiData);

        }).catch(error => {
            console.log(error);
        });

    };


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 마운트 됐을때
    useEffect(()=>{
        console.log("마운트 됐어요");
        
        // 서버에서 데이터 가져오기 그리기
        getPersonList();    // 일반메소드 이거 그냥 실행~

    }, []);

    // 삭제버튼 클릭했을때
    const handleDel = (no)=> {
        console.log("삭제버튼 클릭");

        // 서버로 데이터 전송
        axios({
            method: 'delete',       // put, post, delete
            url: `http://localhost:9000/api/persons/${no}`,

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log("===========");
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타
            console.log(response.data.result);
            console.log("===========");

            if(response.data.result === 'success') {

                /*
                // 리다이렉트 안됨 (같은페이지의 라다이렉트는 안된다)
                navigate("/list");  // 자기페이지로는 리다이랙트 안됨!(새로고침 불가능)
                */
                // 리다이렉트 대신 이걸 해주는거임 삭제하고난후 삭제된것을 제외하고 리스트 뿌려주기
                // getPersonList();    // 만들어놨던 일반메소드 다시 호출
                                    // 다시 처음처럼 불러오는거임 처음부터 삭제된것만 빼고 다시 호출하는(그리는) 개념

                // 우리가 가지고 있는 리스트(배열) personList에서 방금 삭제한 값만 제거된 새로운 배열
                let newArray = personList.filter((person)=>{
                    return person.personId !== no;
                });
                // let newArray = personList.filter((person)=>(person.personId !== no));

                setPersonList(newArray);

                /*
                setPersonList((newArray)=>{     // 이전값 확실히 주세요 preList
                    prevList.filter((person)=>{
                        return person.personId !== no;     // no 인 애만 삭제하고 나머지는 다시 담아줘
                    });
                });
                */


            }else {
                alert(response.data.message);       // "해당번호가 없습니다."
            }
            

        }).catch(error => {
            console.log(error);
        }); 

    };


    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-리스트</h2>

            <p>등록된 전화번호 리스트 입니다.</p>

            {personList.map((personVo)=>{
                return(
                    <div>     
                        <ItemPerson key={personVo.personId}     // 키값
                                    person={personVo}           // 내가정한이름 = 넣은정보
                                    delPerson={handleDel}       // 내가정한이름 = 삭제하는메소드(동작)
                        />
                    </div>
                )
            })}
        

            <br />
            <Link to="/writeform" rel="noreferrer noopener">
                등록폼으로 이동
            </Link>

        </>
    );
}

export default List3;