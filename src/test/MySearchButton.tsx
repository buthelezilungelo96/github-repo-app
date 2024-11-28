import { Input } from 'antd';
const { Search } = Input;

const MySearch = ({ onSearch }: any) => (
  <Search
    placeholder="Enter repository name"
    onSearch={onSearch}
    enterButton
    data-testid="1"
  />
);

export default MySearch;
