import { findPostrequisites, findPrerequisites } from "@/data/example";
import "./style.css";

type TDProps = {
  id: string;
  text: string;
  tdClass: string;
  tdsClass: any;
  setTdsClass: any;
};

const TD = ({ id, text, tdClass, tdsClass, setTdsClass }: TDProps) => {
  const handleIn = () => {
    findPostrequisites(id).forEach((value) => {
      tdsClass[value] = "td_postreq";
    });
    tdsClass[id] = "td_hover";
    let pre = findPrerequisites(id);
    pre.forEach((value) => {
      tdsClass[value] = "td_prereq";
    });
    setTdsClass({ ...tdsClass });
  };

  const handleOut = () => {
    findPostrequisites(id).forEach((value) => {
      tdsClass[value] = "";
    });
    tdsClass[id] = "";
    let pre = findPrerequisites(id);
    pre.forEach((value) => {
      tdsClass[value] = "";
    });
    setTdsClass({ ...tdsClass });
  };

  return (
    <td className={tdClass} onMouseEnter={handleIn} onMouseLeave={handleOut}>
      {text}
    </td>
  );
};

export default TD;
