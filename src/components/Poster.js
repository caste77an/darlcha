import "../css/main.css";

function Poster() {
  return (
    <div className="main_poster">
      <div className="main_poster__bg container d-flex">
        <div className="main_poster__text d-flex flex-column justify-content-center">
          <h3>남다른 차, 남다른 나</h3>
          <p>
            달차만의 특별한 블렌딩으로
            <br /> 당신의 일상에 특별함을 더합니다
          </p>
          <div className="btn">구매하러가기</div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
