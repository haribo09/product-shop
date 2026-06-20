import { useParams, useNavigate } from "react-router-dom";
import { products } from "../datas/products";

const ProductInfo = () => {
    //URL 파라미터에서 id값을 추출
    const {id} = useParams(); // 반환된 객체 구조분해 할당
    const navigate = useNavigate(); // 페이지 이동을 위한 훅

    //products 리스트에서 id와 일치하는 상품 찾기 - fine() 사용
    //외부의 입력된 id가 숫자형이므로 자료형 변환 필수 - parseInt(문자)
    const product = products.find(product => product.id === parseInt(id))

    //페이지 이동 핸들러(함수)
    const doClick = () => {
        navigate("/products"); //상품 목록 페이지로 이동
    }

    return(
        <div className="product-details">
            <p>상품 ID: {id}</p>
            <p>이름: {product.name}</p>
            <p>가격: {product.price}</p>
            <p>상세: {product.description}</p>

            <div>
                <button className="btn-list"
                    onClick={doClick}>목록 보기
                </button>
            </div>
        </div>
    )
}

export default ProductInfo;