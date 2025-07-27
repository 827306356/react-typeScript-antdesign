import { memo } from "react";
interface Props {
    children?: React.ReactNode;
}
const Duradio = memo(({ children }: Props) => {
    return (<div>Duradio</div>);
});
export default Duradio;