import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Ranking = memo(({ children }: Props) => {
    return (<div>Ranking</div>);
});
export default Ranking;