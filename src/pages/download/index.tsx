import { memo } from "react";
interface Props {
  children?: React.ReactNode;
}
const Template = memo(({ children }: Props) => {
  return (<div>Template</div>);
});
export default Template;
