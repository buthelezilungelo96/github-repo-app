import React from 'react';
import { Card, Avatar, Typography, Divider, Tooltip } from 'antd';
import { format } from 'date-fns';
import { Repo } from '../../interfaces/repos';
import {
  ForkOutlined,
  StarOutlined,
  IssuesCloseOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import './RepoDetails.less';

interface RepoDetailsProps {
  repo: Repo;
}

const { Title, Paragraph } = Typography;

const RepoDetails: React.FC<RepoDetailsProps> = ({ repo }) => {
  const {
    description,
    forks_count,
    stargazers_count,
    open_issues_count,
    full_name,
    owner: { avatar_url },
    created_at,
    updated_at,
    language,
  } = repo;

  return (
    <Card className="repo-details" bordered={false}>
      <div className="repo-header">
        <Avatar src={avatar_url} size={64} className="repo-avatar" />
        <Title level={2} className="repo-title">{full_name}</Title>
      </div>
      <Divider />
      <Paragraph>
        <Tooltip title="Repository Description">
          <span><GlobalOutlined /> </span>
        </Tooltip>
        <strong>Description:</strong> {description || 'No description available'}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Number of Forks">
          <span><ForkOutlined /> </span>
        </Tooltip>
        <strong>Forks Count: </strong> {forks_count}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Number of Stars">
          <span><StarOutlined /> </span>
        </Tooltip>
        <strong>Stars Count: </strong> {stargazers_count}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Number of Open Issues">
          <span><IssuesCloseOutlined /> </span>
        </Tooltip>
        <strong>Open Issues Count: </strong> {open_issues_count}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Creation Date">
          <span><CalendarOutlined /> </span>
        </Tooltip>
        <strong>Created At:</strong> {format(new Date(created_at), 'MMM d, yyyy')}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Last Updated Date">
          <span><CalendarOutlined /> </span>
        </Tooltip>
        <strong>Last Updated:</strong> {format(new Date(updated_at), 'MMM d, yyyy')}
      </Paragraph>
      <Paragraph>
        <Tooltip title="Programming Language">
          <span><GlobalOutlined /> </span>
        </Tooltip>
        <strong>Language:</strong> {language || 'Not specified'}
      </Paragraph>
    </Card>
  );
};

export default RepoDetails;
