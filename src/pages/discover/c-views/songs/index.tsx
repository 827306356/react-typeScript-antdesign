import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Songs = memo(({ children }: Props) => {
    return (<div>Songs</div>);
});
export default Songs;