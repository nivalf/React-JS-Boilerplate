import { Layout, Typography } from "../../../../components";

const { Title } = Typography;

const Header = (props) => (
    <Layout.Header>
        <Title level={1} type="secondary" style={{ color: "#fff" }}>
            Header
        </Title>
    </Layout.Header>
);

export default Header;
