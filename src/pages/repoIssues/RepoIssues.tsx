import { useState, useEffect, useCallback } from "react";
import {
  Table,
  Typography,
  Card,
  Spin,
  message,
  Button,
  Select,
} from "antd";
import { PieChartOutlined } from '@ant-design/icons';
import { useParams } from "react-router";
import useWindowDimensions, { ScreenWidth } from "../../utils/Devices";
import { useLoadRepoIssues } from "../../hooks/repos/useRepos";
import PieChartModal from "../../components/modals/PieChartModal";
import { REPO_ISSUES_COLUMNS } from "../../utils/TableColumns";
import "./RepoIssues.less";

const { Title } = Typography;

const options = [
  { value: " ", label: "All" },
  { value: "+is:open", label: "Open" },
  { value: "+is:closed", label: "Closed" },
];

type PathParam = {
  repoName: string;
  userName: string;
};

const RepoIssues = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(" ");
  const { repoName, userName } = useParams<PathParam>();
  const [allIssues, setAllIssues] = useState<any[]>([]);
  const { data, error, isLoading, refetch } = useLoadRepoIssues(
    {
      q: repoName ? `repo:${userName}/${repoName}` : ``,
    },
    state
  );

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (state) {
      refetch();
    }
  }, [state, refetch]);

  useEffect(() => {
    if (state === " " && data?.data) {
      setAllIssues(data.data.items);
    }
  }, [data, state]);

  const handleChange = useCallback((value: string) => {
    setState(value);
  }, []);

  const columns = useCallback(() => REPO_ISSUES_COLUMNS, []);

  return (
    <Spin spinning={isLoading}>
      {data?.data?.items && (
        <PieChartModal
          open={open}
          setOpen={setOpen}
          data={allIssues ?? []}
        />
      )}
      <Card>
        <Title className="repo-issues-title" level={5}>
          Filter by state
        </Title>
        <Select
          defaultValue=" "
          className="repo-issues-select"
          onChange={handleChange}
          options={options}
        />
      </Card>
      {data?.data?.items && (
        <Button
          type="primary"
          onClick={() => setOpen(true)}
          className="repo-issues-button"
          icon={<PieChartOutlined />}
        >
          Visual Insights
        </Button>
      )}
      <Table
        columns={columns()}
        dataSource={data?.data?.items}
        scroll={{ x: width < ScreenWidth.TABLET ? 1200 : "none" }}
        className="repositories-table"
        pagination={{ pageSize: 6 }}
      />
    </Spin>
  );
};

export default RepoIssues;
