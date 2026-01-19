function Time() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col w-[320px] h-[420px] lg:w-[600px] lg:h-[600px] px-[30px] py-[25px] lg:py-[40px] lg:gap-[30px] rounded-[20px] bg-[#74CFFB] border border-[#6BCBF3] items-center justify-center">
        <h1 className="font-bakbak text-[36px] lg:text-[50px] ">TIME TABLE</h1>
        <div className="flex gap-[22px] lg:gap-[60px]">
          <div className="lg:hidden flex flex-col font-bakbak text-[20px] leading-[35px]">
            <p>18:00</p>
            <p>18:10</p>
            <p>19:10</p>
            <p>19:20</p>
            <p><br/></p>
            <p>20:00</p>
            <p>20:15</p>
            <p>20:30</p>
          </div>
          <div className="hidden lg:block flex flex-col font-bakbak text-[30px] leading-[50px] items-center">
            <p>18:00 ~ 18:10</p>
            <p>18:10 ~ 19:10</p>
            <p>19:10 ~ 19:20</p>
            <p>19:20 ~ 20:00</p>
            <p><br/></p>
            <p>20:00 ~ 20:15</p>
            <p>20:15 ~ 20:30</p>
            <p>20:30 ~ 21:00</p>
          </div>
    
          <div className="flex flex-col font-inter font-medium text-[15px] lg:text-[24px] leading-[35px] lg:leading-[50px] items-center">
            <p>소개 및 진행</p>
            <p>3개의 팀 발표</p>
            <p>1차 럭키드로우</p>
            <p>2개의 팀 발표</p>
            <p>외부인원 퇴장</p>
            <p>2차 럭키드로우</p>
            <p>진행</p>
            <p>행사 마무리</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
