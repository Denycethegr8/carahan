import Footer from "./Footer"

const Store = () => {
    return ( 
        <div className="store">
            <div className="store-flex">
                <div className="pricceclub">
                    <img src="../src/img/priceclub.jpg" alt="pricceclub main image" />
                    <a target="_blank" href="https://priceclub.co.kr/"><p>프라이스클럽</p></a>
                </div>
                <div className="storefarm">
                    <img src="../src/img/storefarm.jpg" alt="naver storefarm main image" />
                    <a target="_blank" href="https://brand.naver.com/maristeiger"><p>NAVER 스토어팜</p></a>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Store;