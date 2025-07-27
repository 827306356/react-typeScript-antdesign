import { memo } from "react";
interface Props {
  children?: React.ReactNode;
}
const Download = memo(({ children }: Props) => {
  return (<div>Download</div>);
});
export default Download;
