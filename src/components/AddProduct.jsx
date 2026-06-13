import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import products from "./ProductList";

const AddProduct = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    //입력값 변경 핸들러
    const handleChange = (event) => {
        //속성과 값을 구조분해 할당
        const {name, value} = event.target;

        //변경된 name 값만 업데이트
        setFormData({
            ...formData, 
            [name]: value
        });
    }

    //폼 전송 핸들러
    const handleSubmit = (event) => {
        event.preventDefault(); //기본동작(데이터가 바로 넘어가는 것)을 막아줌

        //입력값 검증
        if(!formData.name.trim() || !formData.price.trim() || !formData.description.trim()) {
            alert("모든 필드를 입력해 주세요.");
            return; //즉시 종료
        }

        //가격필드 검증
        if(isNaN(formData.price) || formData.price < 0) {
            alert("가격은 0원 이상이어야 합니다.")
            return;
        }


        console.log('추가된 상품: ', formData);
        alert("상품이 등록되었습니다.")

        // 상품 목록 페이지로 이동
        navigate('/products')
    }

    return(
        <div className="add-product">
            <h2>상품 등록</h2>
            <form className="add-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="상품명을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        placeholder="가격을 입력하세요"
                    />
                </div>    
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea 
                        id="description"
                        name="description"
                        onChange={handleChange}
                        rows={5}
                        cols={30}
                        placeholder="상품 설명을 입력해주세요"
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                </div>            
            </form>

        </div>
    )
}

export default AddProduct;