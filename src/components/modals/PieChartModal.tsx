import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import PieChart from '../pieChart/PieChart';

interface PieChartProps {
    open: boolean;
    setOpen: (val: boolean) => void;
    data?: any

}
const PieChartModal: React.FC<PieChartProps> = ({open, setOpen, data}) => {
    const navigate = useNavigate();

  const handleNavigate = () => {
    if(data){
        window.open(data.owner.html_url);
        navigate('/repositories');
    }
    setOpen(false);
  };

  const handleViewIssues = () => {
    if(data){
        navigate('/repositories/issues');
    }
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onOk={handleNavigate}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <PieChart data={data} />
      </Modal>
    </>
  );
};

export default PieChartModal;