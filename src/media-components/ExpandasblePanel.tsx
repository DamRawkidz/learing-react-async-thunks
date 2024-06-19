import { useState } from "react";
import { GoArrowLeft, GoChevronDown } from "react-icons/go";

function ExpandablePanel({header, children}: any) {
    const [expanded, setExpanded] = useState(false)

    function handleClick(): void {
            setExpanded(!expanded)
    }

   return (
    <div className="mb-2 boder rounede">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-between">
                        {header}
                    </div>
                    <div className="cursor-pointer" onClick={handleClick}>
                    {expanded ? <GoChevronDown /> : <GoArrowLeft /> }
                    </div>
                </div>
            </div>
            {
                expanded && <div className="p-2 border-t">{children}</div>
            }
            
    </div>
   );
}

export default ExpandablePanel;