import { Typography, Tag, Space } from "antd";
import { format } from "date-fns";

const { Text } = Typography;

export const REPO_ISSUES_COLUMNS = [
  {
    title: "Pull Request Title",
    dataIndex: "title",
    key: "title",
    width: 200,
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    render: (text: string) => (
      <Tag color={text === "closed" ? "volcano" : "green"}>{text}</Tag>
    ),
  },
  {
    title: "Author Association",
    dataIndex: "author_association",
    key: "author_association",
    width: 200,
    render: (text: string) => <Tag>{text ? text : "unknown"}</Tag>,
  },
  {
    title: "Description",
    dataIndex: "body",
    key: "body",
    render: (text: string) => (
      <Text style={{ width: 290 }} ellipsis={{ tooltip: text }}>
        {text}
      </Text>
    ),
  },
  {
    title: "Last Updated At",
    dataIndex: "updated_at",
    key: "updated_at",
    width: 150,
    render: (text: string) => (
      <span>{format(new Date(text), "MMM d, yyyy")}</span>
    ),
  },
];


export const REPO_LIST_COLUMNS = (setRecordHandler: (val: number) => void) => [
    {
        title: "Repository Full Name",
        dataIndex: "full_name",
        key: "full_name",
        render: (text: string) => <span>{text}</span>,
    },
    {
        title: "Repo Access",
        dataIndex: "private",
        key: "private",
        render: (text: boolean) => (
            <Tag color={text ? "volcano" : "green"}>
                {text ? "Private" : "Public"}
            </Tag>
        ),
    },
    {
        title: "Language",
        dataIndex: "language",
        key: "language",
        render: (text: string) => (
            <Tag color="orange">{text || "unknown"}</Tag>
        ),
    },
    {
        title: "Default Branch",
        dataIndex: "default_branch",
        key: "default_branch",
        render: (text: string) => <span>{text}</span>,
    },
    {
        title: "Owner",
        dataIndex: "owner",
        key: "owner",
        render: (_: any, item: { owner: { login: string } }) => <span>{item.owner.login}</span>,
    },
    {
        title: "Action",
        key: "action",
        render: (_: any, item: { id: number }) => (
            <Space
                style={{ cursor: "pointer" }}
                size="middle"
                onClick={() => setRecordHandler(item.id)}
            >
                <Tag style={{ color: "#de4e2a"}}>View Data</Tag>
            </Space>
        ),
    },
];
