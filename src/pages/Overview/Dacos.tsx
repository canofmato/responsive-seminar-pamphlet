import notion from "../../assets/notion.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";

function Dacos() {
  return (
    <div className="flex flex-col items-center justify-between h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)] pt-[150px] lg:pt-[200px] pb-[50px]">

      <div className="flex flex-col items-center justify-center gap-[32px] px-[2px] py-[22px]">
        <h1 className="font-bakbak text-[40px] lg:text-[80px] leading-[35px] lg:leading-[80px] text-[#74CFFB] text-center">About.<br/>DACOS</h1>
        <p className="font-inter text-[15px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-center text-white">DACOS는 이기용 교수님 지도 하에 창설된<br/>
        소프트웨어학부 최초 데이터 분석 동아리입니다.<br/>
        데이터 처리, 머신러닝, 딥러닝 등을 학습하며<br/>
        데이터 분석 관련 커뮤니케이션의 장이 될 것입니다.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-[12px]">
        <h2 className="font-bakbak text-[24px] leading-[28px] text-white">more.</h2>

        <div className="flex gap-[24px] items-center justify-center">

          <a href="https://www.notion.so/smwu-dacos/DACOS-1810d257a31f80bcb715e8b8c9da1487?source=copy_link" target="_blank" rel="noopener noreferrer">
            <img src={notion} alt="notion"/>
          </a>

          <a href="https://www.instagram.com/smdacos_oficial?igsh=OGRqaTNqMzl6cWM%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram"/>
          </a>

          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github"/>
          </a>
        </div>

      </div>
    
    </div>
  );
}

export default Dacos;
