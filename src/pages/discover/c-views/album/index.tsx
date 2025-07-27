import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Album = memo(({ children }: Props) => {
    return (<div>Album</div>);
});
export default Album;