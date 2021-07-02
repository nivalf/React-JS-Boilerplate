import { Typography, Layout } from "../../../../components";

const { Text, Link } = Typography;

const APP_VERSION = require("../../../../../package.json").version;

const Footer = (props) => (
    <Layout.Footer style={{ textAlign: "center" }}>
        <Text type="secondary">
            © 2021 [Company Name] All rights reserved. Version {APP_VERSION}{" "}
            <Link href="" target="_blank">
                Privacy
            </Link>{" "}
            |{" "}
            <Link href="" target="_blank">
                Terms
            </Link>{" "}
        </Text>
    </Layout.Footer>
);

export default Footer;
