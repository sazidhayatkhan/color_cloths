import { ReactNode, useEffect } from 'react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleClickInside = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end pe-3 transition-transform duration-300 ${
        isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      onClick={onClose}
    >
      <div
        className="fixed inset-0 bg-black opacity-70"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="w-[97%] md:w-[38%] h-[97%] bg-white rounded-2xl"
        onClick={handleClickInside}
      >
        {children}
      </div>
    </div>
  );
};

export default SideDrawer;
