import mainImage from "../assets/hero.png"

const Main = () => {
    return(
        <div>
            <h1>컴퓨터 기기 쇼핑몰</h1>
            <h3>좋은 제품을 한 곳에서 만나보세요!</h3>
            <div>
                <img src={mainImage} alt="메인이미지" />
            </div>
        </div>
    )
}

export default Main;