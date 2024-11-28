import { useState, useCallback, useEffect } from "react";
import { Table, Input, GetProps, Card, Spin, message } from "antd";
import { ColumnType } from "antd/es/table";
import useWindowDimensions, { ScreenWidth } from "../../utils/Devices";
import RepoDetailsModal from "../../components/modals/RepoDetailsModal";
import { useLoadRepos } from "../../hooks/repos/useRepos";
import { REPO_LIST_COLUMNS } from "../../utils/TableColumns";
import "./Repositories.less";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const Repositories = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(undefined);
  const [name, setName] = useState("");

  const { data, error, isError, isLoading } = useLoadRepos({
    per_page: 50,
    page: 1,
    q: name,
  });

  const { width } = useWindowDimensions();

  const setRecordHandler = useCallback(
    (id: number) => {
      const foundRecord = data.data.items.find((item: any) => item.id === id);
      if (foundRecord) {
        setSelectedRecord(foundRecord);
        setOpen(true);
      }
    },
    [data?.data?.items]
  );

  const columns: ColumnType<any>[] = REPO_LIST_COLUMNS(setRecordHandler)

  useEffect(() => {
    if (isError && error) {
      message.error(error.message);
    }
  }, [isError, error]);

  const onSearch: SearchProps["onSearch"] = (value) => setName(value);

  return (
    <Spin spinning={isLoading}>
      <RepoDetailsModal open={open} setOpen={setOpen} data={selectedRecord} />
      <Card>
        <Search
          placeholder="Enter repository name"
          onSearch={onSearch}
          enterButton
        />
      </Card>
      <Table
        columns={columns}
        dataSource={data?.data?.items || []}
        scroll={{ x: width < ScreenWidth.TABLET ? 1200 : "none" }}
        className="repositories-table"
        pagination={{ pageSize: 7 }}
      />
    </Spin>
  );
};
export default Repositories;
