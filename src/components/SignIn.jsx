import { useState } from "react";
import { users } from "../datas/users"
import { useNavigate } from "react-router-dom";



const SignIn = ({onLogin}) => {
    //user 객체 상태 관리
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    //로그인 결과 상태 관라
    const [result, setResult] = useState(null);

    //페이지 이동
    const navigate = useNavigate();

    //입력 필드 변경 핸들러
    const handleInputChange = (event) => {
        //event.target.value - 값, event.target.name - 속성
        const {name, value} = event.target;
        console.log(event)
        //속성의 변경된 값을 업데이트 함
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //폼 제출 핸들러
    const handleSubmit = (event) => {
        event.preventDefault(); //기본 동작을 막음
        console.log("전송 데이터: ", formData);

        const {username, password} = formData;

        //데이터 일치 여부 판단 - find() 사용
        //외부에서 입력한 id, password와 저장된 임시 데이터를 비교
        const matched = users.find((user) => (
            user.username === username && user.password === password
        ))

        //로그인 성공여부에 따라 결과 상태 업데이트
        // setResult(matched ? 'success' : 'fail')
        if(matched) { //로그인 성공
            setResult('success');
            onLogin(username); //App에 로그인 정보 전달
            navigate('/'); //home으로 이동
        } else {
            setResult('fail')
        }
    }

    return(
        <div>
            <h2>로그인</h2>
            {/* 폼 태그 사용 */}
            <form onSubmit={handleSubmit}>
                <p>
                    <input 
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="아이디를 입력하세요"
                    />
                </p>
                <p>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="비밀번호를 입력하세요"
                    />
                </p>
                {/* 폼을 전송하는 버튼은 type="submit" */}
                <button type="submit">로그인</button>
            </form>

            {/* 결과 메시지 출력 */}
            {/* {result === 'success' && (
                <p style={{color:'blue'}}>로그인 되었습니다.</p>
                
            )} */}
            {result === 'fail' && (
                <p style={{color:'red'}}>아이디 또는 비밀번호가 일치하지 않습니다.</p>

            )}
        </div>
    )
}

export default SignIn;