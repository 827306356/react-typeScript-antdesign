import { memo } from "react";
interface Props {
  children?: React.ReactNode;
}
const Focus = memo(({ children }: Props) => {
  return (<div>Focus</div>);
});
export default Focus;
