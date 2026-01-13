import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/arrow_back.svg';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로가 메인('/')이면 아무것도 렌더링하지 않음(null 반환)
  if (location.pathname === '/') {
    return null;
  }
  return (
    <header className='bg-black h-[70px] lg:h-[100px] w-full flex items-center px-[22px] lg:px-[50px]'>
      <button className='bg-none border-none p-0 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer' onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back" className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' />
      </button>
    </header>
  );
}

export default Header;
