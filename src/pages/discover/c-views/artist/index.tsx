import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Artist = memo(({ children }: Props) => {
    return (<div>Artist</div>);
});
export default Artist;