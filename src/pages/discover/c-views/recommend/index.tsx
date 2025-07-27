import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Recommend = memo(({ children }: Props) => {
    return (<div>Recommend</div>);
});
export default Recommend;