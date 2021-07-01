import { Button as AntButton } from "antd";

/* Change the shape to round
    - keep props at bottom only (to ensure overwrite)
*/
export const Button = (props) => <AntButton shape="round" {...props} />;
