import { ReactNode, useEffect } from 'react';

interface LeftDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const LeftDrawer: React.FC<LeftDrawerProps> = ({ isOpen, onClose, children }) => {
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
      className={`fixed inset-0 z-50 flex items-start justify-start transition-transform duration-300 ${
        isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      }`}
      onClick={onClose}
    >
      {/* <div
        className="fixed inset-0 bg-black opacity-70"
        style={{ zIndex: -1 }}
      ></div> */}
      <div
        className="w-[88%] bg-white border-black border-t-2 overflow-hidden overflow-y-auto h-[100vh]"
        onClick={handleClickInside}
      >
        {children}
      </div>
    </div>
  );
};

export default LeftDrawer;
