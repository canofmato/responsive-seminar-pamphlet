import projectImg1 from "../../assets/test0.jpg";
import projectImg2 from "../../assets/test1.jpg";
import projectImg3 from "../../assets/test2.jpg";
import projectImg4 from "../../assets/test3.jpg";
import projectImg5 from "../../assets/test4.jpg";

function GenAI1() {
  const projectImages = [
    { id: 1, src: projectImg1 },
    { id: 2, src: projectImg2 },
    { id: 3, src: projectImg3 },
    { id: 4, src: projectImg4 },
    { id: 5, src: projectImg5 },
  ];
  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[80px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[40px] text-center text-white">DART 사업 보고서를 활용한<br/>기업 재무분석 AI 리포트 시스템</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 생성형 AI가 사업보고서 PDF를 처리할 때 발생하는<br/>
          재무제표 구조 인식 한계와 수치 계산 오류,<br/>
          그리고 초보 투자자가 공시를 이해하기 어렵다는 문제를<br/>
          해결하기 위해, 계산·검증 파이프라인을 갖춘 DART 사업<br/>
          보고서 기반 재무분석 AI 리포트 시스템을 구축합니다.<br/><br/>
          이를 통해 초보 투자자도 공시 정보를 쉽고 신뢰성 있게<br/>
          활용할 수 있는 금융 보고서를 제공하고자 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 생성형 AI가 사업보고서 PDF를 처리할 때 발생하는 재무제표 구조 인식 한계와 수치 계산 오류,<br/>
          그리고 초보 투자자가 공시를 이해하기 어렵다는 문제를 해결하기 위해,<br/>
          계산·검증 파이프라인을 갖춘 DART 사업보고서 기반 재무분석 AI 리포트 시스템을 구축합니다.<br/><br/>
          이를 통해 초보 투자자도 공시 정보를 쉽고 신뢰성 있게 활용할 수 있는 금융 보고서를 제공하고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[44px] text-white">김소영 이소윤<br/>조예린</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team1" className="font-inter text-[16px] lg:text-[32px] leading-[28px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project</h1>
        {/* 슬라이더 박스 */}
        <div className="w-full max-w-[340px] lg:max-w-[1000px] overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full snap-center bg-[#74CFFB]overflow-hidden">
                <img
                  src={image.src}
                  alt={`Project ${image.id}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px] h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Q&A</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white">궁금한 점을 남겨주세요</p>

      </div>
    </div>
  );
}

export default GenAI1;
