import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import RepoDetails from '../repoDetails/RepoDetails';


interface RepoDetailsProps {
    open: boolean;
    setOpen: (val: boolean) => void;
    data?: any

}
const RepoDetailsModal: React.FC<RepoDetailsProps> = ({open, setOpen, data}) => {
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
        navigate(`/repositories/issues/${data.full_name}`);
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
          <Button key="submit" type="primary" onClick={handleViewIssues}>
            View Repo Issues
          </Button>,
          <Button
            key="link"
            type="primary"
            onClick={handleNavigate}
          >
            Visit Github Page
          </Button>,
        ]}
      >
        <RepoDetails repo={data} />
      </Modal>
    </>
  );
};

export default RepoDetailsModal;