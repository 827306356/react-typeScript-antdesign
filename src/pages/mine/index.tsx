import { memo } from "react";
interface Props {
  children?: React.ReactNode;
}
const Mine = memo(({ children }: Props) => {
  return (<div>Mine</div>);
});
export default Mine;