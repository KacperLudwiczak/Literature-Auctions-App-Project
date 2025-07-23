import { useParamsStore } from "@/app/hooks/useParamsStore";
import { Button, ButtonGroup } from "flowbite-react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { GiFlamer } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import { buttonClass } from "@/lib/styles";

const pageSizeButtons = [4, 8, 12];
const orderButtons = [
    { label: 'Alphabetical', icon: AiOutlineSortAscending, value: 'make' },
    { label: 'End date', icon: AiOutlineClockCircle, value: 'endingSoon' },
    { label: 'Recently added', icon: FaRegCircleStop, value: 'new' },
]
const filterButtons = [
    { label: 'Live auctions', icon: GiFlamer, value: 'live' },
    { label: 'Ending < 6 hours', icon: FaRegCalendarAlt, value: 'endingSoon' },
    { label: 'Completed', icon: BsStopwatchFill, value: 'finished' },
]

export default function Filters() {
    const setParams = useParamsStore(state => state.setParams);

    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Filter by</span>
                <ButtonGroup outline>
                    {filterButtons.map(({label, icon: Icon, value}) => (
                        <Button
                            key={value}
                            onClick={() => setParams({ filterBy: value })}
                            className={buttonClass}
                        >
                            <Icon className="mr-3 h-4 w-4" />
                            {label}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Order by</span>
                <ButtonGroup outline>
                    {orderButtons.map(({label, icon: Icon, value}) => (
                        <Button
                            key={value}
                            onClick={() => setParams({ orderBy: value })}
                            className={buttonClass}
                        >
                            <Icon className="mr-3 h-4 w-4" />
                            {label}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
                <ButtonGroup outline>
                    {pageSizeButtons.map((value, index) => (
                        <Button
                            key={index}
                            onClick={() => setParams({ pageSize: value })}
                            className={buttonClass}
                        >
                            {value}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}